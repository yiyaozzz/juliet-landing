import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juliet Landing — Relationship Research OS",
  description:
    "A premium, borderless landing experience for Juliet, the modern relationship research platform built for marketing and product teams.",
  metadataBase: new URL("https://firstdatelabs.com"),
  openGraph: {
    title: "Juliet Landing",
    description:
      "Launch insight-backed experiences faster with Juliet’s unified research workspace.",
    url: "https://firstdatelabs.com",
    siteName: "Juliet",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
