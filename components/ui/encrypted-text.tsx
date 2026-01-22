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

export const EncryptedText: React.FC<EncryptedTextProps & { initialScrambleMs?: number }> = ({
  text,
  className,
  revealDelayMs = 60,
  flipDelayMs = 40,
  charset = DEFAULT_CHARSET,
  initialScrambleMs = 400,
  encryptedClassName,
  revealedClassName,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [mounted, setMounted] = useState(false);
  const [revealCount, setRevealCount] = useState(0);

  const scrambleCharsRef = useRef<string[]>([]);
  const startTimeRef = useRef(0);
  const lastFlipTimeRef = useRef(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !isInView) return;

    scrambleCharsRef.current = generateGibberishPreservingSpaces(
      text,
      charset
    ).split("");

    setRevealCount(0);

    startTimeRef.current = performance.now();
    lastFlipTimeRef.current = startTimeRef.current;

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;

      // ⏸️ Initial full scramble phase
      if (elapsed < initialScrambleMs) {
        if (now - lastFlipTimeRef.current > flipDelayMs) {
          scrambleCharsRef.current = scrambleCharsRef.current.map((c, i) =>
            text[i] === " " ? " " : generateRandomCharacter(charset)
          );
          lastFlipTimeRef.current = now;
        }
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      // 🔓 Reveal phase
      const revealElapsed = elapsed - initialScrambleMs;
      const nextReveal = Math.min(
        text.length,
        Math.floor(revealElapsed / revealDelayMs)
      );

      setRevealCount(nextReveal);

      if (now - lastFlipTimeRef.current > flipDelayMs) {
        for (let i = nextReveal; i < text.length; i++) {
          scrambleCharsRef.current[i] =
            text[i] === " " ? " " : generateRandomCharacter(charset);
        }
        lastFlipTimeRef.current = now;
      }

      if (nextReveal < text.length) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mounted, isInView, text, charset, revealDelayMs, flipDelayMs, initialScrambleMs]);

  if (!mounted) {
    return <span ref={ref}>{text}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={i < revealCount ? revealedClassName : encryptedClassName}
        >
          {i < revealCount ? char : scrambleCharsRef.current[i]}
        </span>
      ))}
    </span>
  );
};
