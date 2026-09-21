import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact & Logistics | Night of Divine Reversal (NDR)",
  description:
    "Get directions, free bus logistics across Lagos, and direct support for Night of Divine Reversal at The Ark of Light for All Nations.",
};

export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg-main)",
        position: "relative",
        overflowX: "hidden",
        paddingTop: "var(--navbar-height)",
      }}
    >
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  );
}
