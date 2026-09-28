import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-stack",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sample — Redfish Instrumentation & Electrical",
  description:
    "A sample website for an industrial electrical and instrumentation contractor. Redfish I&E is a fictional company.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} antialiased`}>
        <div className="bg-paper">
          {/* This banner is not decoration. It keeps the sample from being mistaken
              for a real company, which matters both ethically and legally. */}
          <div className="sticky top-0 z-50 bg-ink text-bone">
            <div className="mx-auto max-w-6xl px-5 py-2.5 text-sm sm:px-8">
              <p className="leading-snug">
                <span className="mr-2 rounded-sm bg-brass px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink">
                  Sample
                </span>
                Redfish I&amp;E is a fictional company. This is a demonstration
                build.
              </p>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
