"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type EncryptedTextProps = {
  text: string;
  className?: string;
  revealDelayMs?: number;
  charset?: string;
  flipDelayMs?: number;
  encryptedClassName?: string;
  revealedClassName?: string;
};

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function generateRandomCharacter(charset: string): string {
  return charset.charAt(Math.floor(Math.random() * charset.length));
}

function generateGibberishPreservingSpaces(
  original: string,
  charset: string,
): string {
  return original
    .split("")
    .map((ch) => (ch === " " ? " " : generateRandomCharacter(charset)))
    .join("");
}

export const EncryptedText: React.FC<EncryptedTextProps> = ({
  text,
  className,
  revealDelayMs = 50,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 50,
  encryptedClassName,
  revealedClassName,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  /** 🔑 Hydration fix */
  const [mounted, setMounted] = useState(false);

  /** Animation state */
  const [revealCount, setRevealCount] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef(0);
  const lastFlipTimeRef = useRef(0);
  const scrambleCharsRef = useRef<string[]>(
    generateGibberishPreservingSpaces(text, charset).split("")
  );

  /** Ensure server + first client render match */
  useEffect(() => {
    setMounted(true);
  }, []);

  /** Animation logic (client-only) */
  useEffect(() => {
    if (!mounted || !isInView) return;

    scrambleCharsRef.current = generateGibberishPreservingSpaces(
      text,
      charset
    ).split("");

    startTimeRef.current = performance.now();
    lastFlipTimeRef.current = startTimeRef.current;
    setRevealCount(0);

    let cancelled = false;

    const update = (now: number) => {
      if (cancelled) return;

      const elapsed = now - startTimeRef.current;
      const totalLength = text.length;
      const currentReveal = Math.min(
        totalLength,
        Math.floor(elapsed / Math.max(1, revealDelayMs))
      );

      setRevealCount(currentReveal);

      if (currentReveal < totalLength) {
        if (now - lastFlipTimeRef.current >= flipDelayMs) {
          for (let i = currentReveal; i < totalLength; i++) {
            scrambleCharsRef.current[i] =
              text[i] === " " ? " " : generateRandomCharacter(charset);
          }
          lastFlipTimeRef.current = now;
        }
        animationFrameRef.current = requestAnimationFrame(update);
      }
    };

    animationFrameRef.current = requestAnimationFrame(update);

    return () => {
      cancelled = true;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mounted, isInView, text, revealDelayMs, flipDelayMs, charset]);

  /** 🔐 SSR-safe fallback */
  if (!mounted) {
    return (
      <span ref={ref} className={cn(className)} aria-label={text} role="text">
        {text}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={cn(className)}
      aria-label={text}
      role="text"
    >
      {text.split("").map((char, index) => {
        const isRevealed = index < revealCount;
        const displayChar = isRevealed
          ? char
          : char === " "
          ? " "
          : scrambleCharsRef.current[index];

        return (
          <span
            key={index}
            className={cn(
              isRevealed ? revealedClassName : encryptedClassName
            )}
          >
            {displayChar}
          </span>
        );
      })}
    </motion.span>
  );
};
