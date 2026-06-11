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
const siteURL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_URL!
    : "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: siteURL,
  title: "Karun Ghimire | Full-Stack Web Developer",
  description:
    "Full-stack web developer specializing in React, Next.js, TypeScript, and Node.js. Building scalable, user-friendly web applications and modern digital experiences.",

  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Karun Ghimire | Full-Stack Web Developer",
    description:
      "Full-stack web developer specializing in React, Next.js, TypeScript, and Node.js. Building scalable, user-friendly web applications and modern digital experiences.",
    url: siteURL,
    siteName: "Karun | Full-Stack Web Developer",
    images: [
      {
        url: `${siteURL}/assets/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Karun Ghimire Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Karun Ghimire",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Developer Nepal",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
