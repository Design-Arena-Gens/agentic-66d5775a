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
  title: "Nexia | AI Agency for Every Business",
  description:
    "Nexia delivers end-to-end AI automation, machine learning, and digital experience solutions tailored to ambitious teams across every industry.",
  metadataBase: new URL("https://agentic-66d5775a.vercel.app"),
  openGraph: {
    title: "Nexia | AI Agency",
    description:
      "Full-stack AI transformations: automation, AI callers, dashboards, websites, marketing intelligence, and more.",
    url: "https://agentic-66d5775a.vercel.app",
    siteName: "Nexia",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Nexia AI Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexia | AI Agency",
    description:
      "Custom AI and automation solutions for any business stage.",
    images: ["/og.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
