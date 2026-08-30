import type { Metadata } from "next";
import { Syne, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Junior Software Engineer",
  email: profile.email,
  telephone: profile.phoneHref,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "MH",
    addressCountry: "IN",
  },
  alumniOf: "DES Navinchandra Mehta Institute of Technology & Development",
  sameAs: [profile.github, profile.linkedin],
};

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const brand = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["700"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Sneha Zalte — MCA Graduate & ML Engineer",
  description:
    "Portfolio of Sneha Zalte — MCA graduate, Junior Software Engineer at Ant Systemz. Python, Java, Android, ML, and assistive tech.",
  openGraph: {
    title: "Sneha Zalte — Portfolio",
    description: profile.headline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} ${brand.variable}`}
    >
      <body className="font-[var(--font-body)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
