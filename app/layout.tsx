import type { Metadata } from "next";
import { Original_Surfer, Quantico } from "next/font/google";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import "./globals.css";

const originalSurfer = Original_Surfer({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-original-surfer",
});

const quantico = Quantico({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-quantico",
});

export const metadata: Metadata = {
  title: "Gaurav Gulati | Portfolio",
  description: "AI Engineer portfolio of Gaurav Gulati.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${originalSurfer.variable} ${quantico.variable} antialiased relative isolate min-h-screen bg-background text-foreground`}
      >
        <div className="fixed inset-0 z-0 pointer-events-none">
          <StarsBackground className="opacity-70" starDensity={0.00018} />
          <ShootingStars className="opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/80" />
        </div>

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
