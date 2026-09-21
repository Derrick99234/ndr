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
    "Official portal for Night of Divine Reversal (NDR) convened by Prophet Isaiah Macwealth. A monthly virtual prophetic meeting broadcast globally from The Ark of Light for All Nations. Praise, prophetic prayers, Sweet Water ministration, and supernatural turnaround.",
  keywords: [
    "Night of Divine Reversal",
    "NDR",
    "Monthly Virtual Meeting",
    "Prophet Isaiah Macwealth",
    "Ark of Light for All Nations",
    "Gospel Pillars",
    "Sweet Water Ministration",
    "OneSound Bible Institute",
    "Supernatural Turnaround",
    "Prophetic Vigil Lagos",
  ],
  authors: [{ name: "Gospel Pillars International Churches" }],
  openGraph: {
    title: "Night of Divine Reversal (NDR) | Prophet Isaiah Macwealth",
    description:
      "A monthly virtual night of praise, prophecy, and supernatural turnaround broadcast globally from The Ark of Light for All Nations.",
    url: "https://ndr.gospelpillars.org",
    siteName: "Night of Divine Reversal",
    images: [
      {
        url: "/images/ndr-hero-live.jpg",
        width: 1200,
        height: 630,
        alt: "Night of Divine Reversal Sanctuary",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Night of Divine Reversal (NDR) | Prophet Isaiah Macwealth",
    description: "Monthly virtual night of praise, prophecy, and supernatural turnaround with Prophet Isaiah Macwealth.",
    images: ["/images/ndr-hero-live.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body style={{ fontFamily: "var(--font-body), sans-serif" }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
