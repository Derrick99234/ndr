import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Register for NDR | Night of Divine Reversal",
  description:
    "Register for live virtual stream or physical attendance (restricted group) for Night of Divine Reversal (NDR) with Prophet Isaiah Macwealth.",
};

export default function RegisterPage() {
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
      <RegisterSection />
      <Footer />
    </main>
  );
}
