import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Changyu Geng (Mario) - Portfolio",
  description:
    "Senior Frontend Engineer specializing in Vue.js, Angular, and Web CAD (React/Three.js). Creator of open source tools and libraries.",
  keywords: [
    "Changyu Geng",
    "Mario Studio",
    "Mario",
    "Frontend Engineer",
    "Vue.js",
    "Angular",
    "React",
    "Three.js",
    "TypeScript",
    "WebGL",
    "Web CAD",
    "Open Source",
    "Workout Timer",
    "灵动健身",
    "Focus Grid",
    "Schulte Grid",
    "舒尔特方格",
    "SmartProxy",
    "Blind-2048",
  ],
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
