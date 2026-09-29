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
  metadataBase: new URL("https://nightofdivinereversal.org"),
  title: "Night of Divine Reversal (NDR) | Prophet Isaiah Macwealth",
  description:
    "Official portal for Night of Divine Reversal (NDR) hosted by Prophet Isaiah Macwealth. A monthly virtual prophetic meeting broadcast globally from The Ark of Light for All Nations. Praise, prophetic prayers, Sweet Water ministration, and supernatural turnaround.",
  keywords: [
    "Night of Divine Reversal",
    "NDR",
    "NDR Prophet Isaiah Macwealth",
    "Monthly Virtual Meeting",
    "Prophet Isaiah Macwealth",
    "Ark of Light for All Nations",
    "Gospel Pillars International Churches",
    "Sweet Water Ministration",
    "OneSound Bible Institute",
    "Supernatural Turnaround",
    "Prophetic Vigil Lagos",
    "Divine Reversal Prayers",
    "3 Days of Remembrance",
    "Faith and Victory Classes",
  ],
  authors: [{ name: "Gospel Pillars International Churches" }],
  openGraph: {
    title: "Night of Divine Reversal (NDR) | Prophet Isaiah Macwealth",
    description:
      "A monthly virtual night of praise, prophecy, and supernatural turnaround broadcast globally from The Ark of Light for All Nations.",
    url: "https://nightofdivinereversal.org",
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
  icons: {
    icon: [
      { url: "/images/ndr-logo.jpg" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/ndr-logo.jpg",
    apple: "/images/ndr-logo.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nightofdivinereversal.org/#organization",
      "name": "Night of Divine Reversal",
      "url": "https://nightofdivinereversal.org",
      "logo": "https://nightofdivinereversal.org/images/ndr-logo.jpg",
      "sameAs": [
        "https://www.youtube.com/@isaiahmacwealth",
        "https://www.facebook.com/gospelpillarsinternational/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+234 809 011 1194",
        "contactType": "customer service",
        "areaServed": "Global"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot 11, Kudirat Abiola Way, Alausa",
        "addressLocality": "Ikeja",
        "addressRegion": "Lagos",
        "addressCountry": "Nigeria"
      }
    },
    {
      "@type": "Person",
      "@id": "https://nightofdivinereversal.org/#prophet",
      "name": "Prophet Isaiah Macwealth",
      "jobTitle": "Senior Pastor & Prophet",
      "worksFor": {
        "@type": "Organization",
        "name": "Gospel Pillars International Churches"
      },
      "sameAs": [
        "https://www.youtube.com/@isaiahmacwealth",
        "https://www.facebook.com/isaiahmacwealth"
      ]
    },
    {
      "@type": "Event",
      "@id": "https://nightofdivinereversal.org/#upcoming-event",
      "name": "Night of Divine Reversal (NDR) - Monthly Virtual Meeting",
      "description": "Monthly virtual prophetic vigil with Prophet Isaiah Macwealth broadcast globally from The Ark of Light for All Nations.",
      "startDate": "2026-10-02T20:00:00+01:00",
      "endDate": "2026-10-03T05:00:00+01:00",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "VirtualLocation",
        "url": "https://www.youtube.com/@isaiahmacwealth"
      },
      "image": [
        "https://nightofdivinereversal.org/images/ndr-hero-live.jpg"
      ],
      "performer": {
        "@type": "Person",
        "name": "Prophet Isaiah Macwealth"
      },
      "organizer": {
        "@type": "Organization",
        "name": "Gospel Pillars International Churches",
        "url": "https://nightofdivinereversal.org"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-body), sans-serif" }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
