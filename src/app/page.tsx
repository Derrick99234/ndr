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
import RegisterSection from "@/components/RegisterSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
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

      {/* Hero Section with Live Countdown to NDR 13 */}
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

      {/* 6. Upcoming Events (NDR 13 Grand Finale Showcase & .ics Download) */}
      <UpcomingEvents />

      {/* 7. Testimonies (Personal Text Testimonies & Video Encounters) */}
      <Testimonies />

      {/* 8. Register to Attend (Physical / Virtual + Sweet Water Prayer Line) */}
      <RegisterSection />

      {/* 9. Blog & Prophetic Insights */}
      <BlogSection />

      {/* 10. Contact Us & Free Lagos Bus Logistics */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
