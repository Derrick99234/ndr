import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PictureGallery from "@/components/PictureGallery";

export const metadata: Metadata = {
  title: "Past Event Moments & Gallery | Night of Divine Reversal (NDR)",
  description:
    "Explore high-definition photos and powerful moments captured across past editions of Night of Divine Reversal at The Ark of Light for All Nations.",
  alternates: {
    canonical: "/past-event",
  },
};

export default function PastEventPage() {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-main)" }}>
        {/* Header Hero Banner */}
        <section
          style={{
            padding: "160px 24px 60px 24px",
            position: "relative",
            overflow: "hidden",
            background:
              "radial-gradient(ellipse at 50% 20%, rgba(245, 158, 11, 0.15) 0%, rgba(6, 9, 19, 0.98) 75%)",
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
              <span style={{ color: "var(--text-secondary)" }}>Past Event</span>
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
              Past Event <span className="gold-gradient-text">Moments</span>
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
              A visual journey through the glory, intense worship atmosphere, prophetic decrees, and congregation recorded across editions of Night of Divine Reversal at The Ark of Light for All Nations.
            </p>
          </div>
        </section>

        {/* Interactive Gallery Component */}
        <PictureGallery hideHeader={true} showTabs={false} isStandalonePage={true} />

        {/* Bottom Call to Action: Next NDR Edition */}
        <section className="section-wrapper" style={{ paddingTop: "10px", paddingBottom: "80px" }}>
          <div className="section-container" style={{ maxWidth: "860px" }}>
            <div
              className="glass-card"
              style={{
                padding: "44px 32px",
                borderRadius: "16px",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                background: "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(6, 9, 19, 0.95) 100%)",
                textAlign: "center",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--gold-primary)",
                  marginBottom: "12px",
                }}
              >
                Upcoming Edition
              </span>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginBottom: "14px" }}>
                Experience the Next <span className="gold-gradient-text">Night of Divine Reversal</span>
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "660px", margin: "0 auto 26px auto" }}>
                Don’t just look at past encounters—position yourself for your own supernatural reversal. Join thousands connecting virtually across the globe for an all-night prophetic encounter.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
                <Link
                  href="/register"
                  className="btn-primary"
                  style={{ textDecoration: "none", padding: "12px 28px", fontSize: "0.92rem", fontWeight: 700 }}
                >
                  Register to Attend Online →
                </Link>
                <Link
                  href="/how-to-prepare"
                  className="btn-outline-gold"
                  style={{ textDecoration: "none", padding: "12px 28px", fontSize: "0.92rem", fontWeight: 700 }}
                >
                  How to Prepare
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
