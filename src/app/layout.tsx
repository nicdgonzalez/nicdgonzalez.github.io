import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Banner } from "@/components/Banner";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicolas Gonzalez",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-black dark:text-white dark:bg-zinc-950`}
      >
        <Banner>This site is under active development!</Banner>
        {children}
      </body>
    </html>
  );
}
