import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { school } from "@/lib/data";
import { asset } from "@/lib/path";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${school.name} | ${school.tagline}`,
  description: `${school.name} — Established ${school.established}. Premium education from ${school.classesOffered} in ${school.address.line2}, ${school.address.state}. Affiliated with ${school.affiliation}.`,
  keywords: [
    school.name,
    "school in Rangapara",
    "school in Sonitpur",
    "SEBA school Assam",
    "best school Tezpur",
    "private school Assam",
    "Seven Sisters school",
  ],
  authors: [{ name: school.name }],
  openGraph: {
    title: `${school.name} | ${school.tagline}`,
    description: `Premium education since ${school.established}. ${school.classesOffered}.`,
    type: "website",
    locale: "en_IN",
    siteName: school.name,
  },
  icons: {
    icon: asset("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
