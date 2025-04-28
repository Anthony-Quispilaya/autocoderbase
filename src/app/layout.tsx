import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Anthony Quispilaya | Portfolio",
    template: "%s | Anthony Quispilaya",
  },
  description: "Personal portfolio of Anthony Quispilaya, aspiring web developer.",
  authors: [{ name: "Anthony Quispilaya" }],
  keywords: ["portfolio", "web developer", "Anthony Quispilaya", "projects", "about"],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
};

import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body id="__body" className={`${inter.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        <MainNav />
        <main>{children}</main>
        {/* Day/Night mode sync script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function updateBodyClass() {
                var mode = window.__DAYNIGHT_MODE__;
                var body = document.getElementById('__body');
                if (!body) return;
                if (mode === 'day') {
                  body.classList.add('day');
                } else {
                  body.classList.remove('day');
                }
              }
              window.__setDayNightMode = function(mode) {
                window.__DAYNIGHT_MODE__ = mode;
                updateBodyClass();
              };
              window.__DAYNIGHT_MODE__ = 'night';
              updateBodyClass();
            })();
          `
        }} />
      </body>
    </html>
  );
}
