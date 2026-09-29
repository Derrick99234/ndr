import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonies from "@/components/Testimonies";

export const metadata: Metadata = {
  title: "Documented Testimonies of Supernatural Turnaround | NDR",
  description:
    "Explore documented accounts and video encounters of miraculous conception, terminal illness healing, and divine reversal recorded at Night of Divine Reversal with Prophet Isaiah Macwealth.",
  alternates: {
    canonical: "/testimonies",
  },
};

export default function TestimoniesPage() {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-main)" }}>
        {/* Header Banner */}
        <section
          style={{
            padding: "160px 24px 70px 24px",
            position: "relative",
            overflow: "hidden",
            background:
              "radial-gradient(ellipse at 50% 20%, rgba(245, 158, 11, 0.14) 0%, rgba(6, 9, 19, 0.98) 75%)",
            borderBottom: "1px solid rgba(245, 158, 11, 0.18)",
          }}
        >
          {/* Subtle Ambient Glows */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "15%",
              width: "350px",
              height: "350px",
              background: "rgba(245, 158, 11, 0.08)",
              borderRadius: "50%",
              filter: "blur(90px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              right: "10%",
              width: "400px",
              height: "400px",
              background: "rgba(59, 130, 246, 0.06)",
              borderRadius: "50%",
              filter: "blur(100px)",
              pointerEvents: "none",
            }}
          />

          <div
            className="section-container"
            style={{ textAlign: "center", position: "relative", zIndex: 1, maxWidth: "860px" }}
          >
            {/* Breadcrumb */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                marginBottom: "20px",
              }}
            >
              <Link href="/" style={{ color: "var(--gold-light)", textDecoration: "none" }}>
                Home
              </Link>
              <span>/</span>
              <span style={{ color: "var(--text-secondary)" }}>Testimonies</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.3rem, 5vw, 3.8rem)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "18px",
                letterSpacing: "-0.02em",
              }}
            >
              Testimonies of <span className="gold-gradient-text">Divine Reversal</span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                margin: "0 auto",
                maxWidth: "760px",
              }}
            >
              Read documented accounts of supernatural turnaround, healing, and divine reversal, and watch video encounters demonstrating the living power of God at The Ark of Light for All Nations.
            </p>
          </div>
        </section>

        {/* Testimonies Interactive Component */}
        <Testimonies hideHeader={true} />

        {/* Bottom Call to Action: Share Testimony */}
        <section className="section-wrapper" style={{ paddingTop: "20px", paddingBottom: "80px" }}>
          <div className="section-container" style={{ maxWidth: "860px" }}>
            <div
              className="glass-card"
              style={{
                padding: "40px 32px",
                borderRadius: "16px",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                background: "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(6, 9, 19, 0.95) 100%)",
                textAlign: "center",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
              }}
            >
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#ffffff", marginBottom: "12px" }}>
                Experienced a <span className="gold-gradient-text">Supernatural Reversal?</span>
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "680px", margin: "0 auto 24px auto" }}>
                Testimonies enforce your victory and ignite faith in thousands worldwide. If God has turned your situation around through the Night of Divine Reversal, share your testimony today.
              </p>
              <Link
                href="/contact"
                className="guide-cta-btn-primary"
                style={{ textDecoration: "none", display: "inline-flex" }}
              >
                Share Your Testimony Now →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
