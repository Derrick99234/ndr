import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutNDR from "@/components/AboutNDR";
import Convener from "@/components/Convener";
import WhatToExpect from "@/components/WhatToExpect";
import ProgrammeSchedule from "@/components/ProgrammeSchedule";
import PictureGallery from "@/components/PictureGallery";
import UpcomingEvents from "@/components/UpcomingEvents";
import Testimonies from "@/components/Testimonies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg-main)",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Top Glassmorphic Navigation */}
      <Navbar />

      {/* Hero Section with Live Countdown to NDR */}
      <Hero />

      {/* 1. About NDR & The 5 Reversal Focuses */}
      <AboutNDR />

      {/* 2. About the Convener - Prophet Isaiah Macwealth */}
      <Convener />

      {/* 3. What to Expect at NDR */}
      <WhatToExpect />

      {/* 4. Programme Schedule (Week-Long, 7 Weeks Seminars, 3 Days of Remembrance) */}
      <ProgrammeSchedule />

      {/* 5. Picture Gallery (Filterable + Lightbox) */}
      <PictureGallery />

      {/* 6. Upcoming Events (Monthly Virtual Showcase & .ics Download) */}
      <UpcomingEvents />

      {/* 7. Testimonies (Personal Text Testimonies & Video Encounters) */}
      <Testimonies />

      {/* Footer */}
      <Footer />
    </main>
  );
}
