import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prophetic Insights & Blog | Night of Divine Reversal (NDR)",
  description:
    "Deep revelatory teachings, faith articles, and prophetic insights by Prophet Isaiah Macwealth for the Night of Divine Reversal.",
};

export default function BlogPage() {
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
      <BlogSection />
      <Footer />
    </main>
  );
}
