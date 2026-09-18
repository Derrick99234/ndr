import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ndr.gospelpillars.org"),
  title: "Night of Divine Reversal (NDR) | Prophet Isaiah Macwealth",
  description:
    "Official portal for Night of Divine Reversal (NDR) convened by Prophet Isaiah Macwealth. Grand Finale of the 3 Days of Remembrance at The Ark of Light for All Nations, Lagos, Nigeria. Praise, prophetic prayers, Sweet Water ministration, and supernatural turnaround.",
  keywords: [
    "Night of Divine Reversal",
    "NDR 13",
    "Prophet Isaiah Macwealth",
    "Ark of Light for All Nations",
    "Gospel Pillars",
    "3 Days of Remembrance",
    "Sweet Water Ministration",
    "OneSound Bible Institute",
    "Supernatural Turnaround",
    "Prophetic Vigil Lagos",
  ],
  authors: [{ name: "Gospel Pillars International Churches" }],
  openGraph: {
    title: "Night of Divine Reversal (NDR) | Prophet Isaiah Macwealth",
    description:
      "A night of praise, prophecy, and supernatural turnaround at The Ark of Light for All Nations, Lagos. Grand Finale of the 3 Days of Remembrance.",
    url: "https://ndr.gospelpillars.org",
    siteName: "Night of Divine Reversal",
    images: [
      {
        url: "/images/ndr-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Night of Divine Reversal at The Ark of Light for All Nations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Night of Divine Reversal (NDR) | Prophet Isaiah Macwealth",
    description: "Grand Finale of the 3 Days of Remembrance at The Ark of Light for All Nations.",
    images: ["/images/ndr-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body style={{ fontFamily: "var(--font-body), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
