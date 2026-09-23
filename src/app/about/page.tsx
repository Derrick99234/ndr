import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Convener from "@/components/Convener";
import { NDR_DATA } from "@/data/ndrContent";

export const metadata: Metadata = {
  title: "About Prophet Isaiah Macwealth | Night of Divine Reversal (NDR)",
  description:
    "Learn about Prophet Isaiah Macwealth, Senior Pastor of Gospel Pillars Intl. Churches worldwide, founder of OneSound Revival Fellowship, and convener of the Night of Divine Reversal.",
};

export default function AboutPage() {
  const { aboutNDR } = NDR_DATA;

  return (
    <>
      <Navbar />

      <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-main)" }}>
        {/* About Header Banner */}
        <section
          style={{
            padding: "160px 24px 60px 24px",
            position: "relative",
            overflow: "hidden",
            background:
              "radial-gradient(ellipse at 50% 20%, rgba(245, 158, 11, 0.12) 0%, rgba(6, 9, 19, 0.98) 75%)",
            borderBottom: "1px solid rgba(245, 158, 11, 0.15)",
          }}
        >
          <div
            className="section-container"
            style={{ textAlign: "center", position: "relative", zIndex: 1 }}
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
              <span style={{ color: "var(--text-secondary)" }}>About Prophet Isaiah Macwealth</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "18px",
              }}
            >
              About <span className="gold-gradient-text">Prophet Isaiah Macwealth</span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "var(--text-secondary)",
                maxWidth: "850px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Senior Pastor, Gospel Pillars Intl. Churches worldwide | Founder, OneSound Revival
              Fellowship | Convener of Night of Divine Reversal (NDR)
            </p>
          </div>
        </section>

        {/* Convener Section (Bio stops at divine turnaround + Read More popup) */}
        <Convener />

        {/* The NDR Vision & Virtual Meeting Context */}
        <section className="section-wrapper" style={{ backgroundColor: "var(--bg-alt)" }}>
          <div className="section-container">
            <div
              className="glass-card"
              style={{
                padding: "clamp(30px, 5vw, 50px)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                background:
                  "linear-gradient(135deg, rgba(6, 9, 19, 0.95) 0%, rgba(20, 26, 45, 0.9) 100%)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "var(--radius-full)",
                  background: "rgba(245, 158, 11, 0.15)",
                  color: "var(--gold-light)",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "16px",
                }}
              >
                The Vision Behind NDR
              </div>

              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.25,
                  marginBottom: "18px",
                }}
              >
                Night of Divine Reversal:{" "}
                <span className="gold-gradient-text">A Monthly Virtual Prophetic Meeting</span>
              </h2>

              <p
                style={{
                  fontSize: "1.02rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "20px",
                }}
              >
                {aboutNDR.summary}
              </p>

              <p
                style={{
                  fontSize: "0.98rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "32px",
                }}
              >
                {aboutNDR.atmosphere}
              </p>

              <div
                style={{
                  padding: "20px 24px",
                  borderRadius: "12px",
                  background: "rgba(245, 158, 11, 0.08)",
                  border: "1px solid rgba(245, 158, 11, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "16px",
                }}
              >
                <div>
                  <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "1rem" }}>
                    Physical Attendance Guidelines
                  </div>
                  <div style={{ color: "var(--gold-light)", fontSize: "0.85rem", marginTop: "4px" }}>
                    Physical presence is reserved for: Full Choir | All Pastors and Ministers |
                    Testifiers
                  </div>
                </div>

                <Link href="/register" className="btn-primary">
                  Register for Virtual Access
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
