import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Convener from "@/components/Convener";
import { NDR_DATA } from "@/data/ndrContent";

export const metadata: Metadata = {
  title: "About Night of Divine Reversal & Prophet Isaiah Macwealth",
  description:
    "Learn about the vision of Night of Divine Reversal (NDR), the 5 reversal focuses, and the apostolic & prophetic ministry of Prophet Isaiah Macwealth.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const { aboutNDR } = NDR_DATA;

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
              <span style={{ color: "var(--text-secondary)" }}>About</span>
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
              About <span className="gold-gradient-text">Night of Divine Reversal</span>
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
              A monthly prophetic encounter hosted by Prophet Isaiah Macwealth at The Ark of Light for All Nations, gathering believers worldwide for supernatural turnaround, healing, and divine restoration.
            </p>
          </div>
        </section>

        {/* Section: The Program (Night of Divine Reversal) */}
        <section className="section-wrapper" style={{ backgroundColor: "var(--bg-main)", paddingTop: "80px" }}>
          <div className="section-container">
            {/* Main Overview Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "48px",
                alignItems: "center",
                marginBottom: "70px",
              }}
            >
              {/* Left Column: Narrative */}
              <div>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "1.1rem",
                    lineHeight: 1.85,
                    marginBottom: "28px",
                  }}
                >
                  {aboutNDR.atmosphere}
                </p>

                {/* Key Quick Highlight Cards */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                    gap: "12px",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      padding: "14px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--gold-light)" }}>
                      Monthly
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px", textTransform: "uppercase" }}>
                      Vigil Gathering
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "14px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff" }}>
                      Global
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px", textTransform: "uppercase" }}>
                      Virtual Broadcast
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "14px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fbbf24" }}>
                      11:00 PM
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px", textTransform: "uppercase" }}>
                      WAT Start Time
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Sanctuary Image */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "460px",
                    aspectRatio: "4/3",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid rgba(245, 158, 11, 0.3)",
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(245, 158, 11, 0.15)",
                  }}
                >
                  <Image
                    src="/images/ndr-hero-live.jpg"
                    alt="Night of Divine Reversal Sanctuary"
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 55%, rgba(6, 9, 19, 0.95) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "18px",
                      left: "20px",
                      right: "20px",
                    }}
                  >
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>
                      The Ark of Light for All Nations
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--gold-light)", marginTop: "2px" }}>
                      Plot 11, Kudirat Abiola Way, Alausa, Ikeja, Lagos
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillars of the Encounter */}
            <div style={{ marginBottom: "60px" }}>
              <div style={{ textAlign: "center", marginBottom: "36px" }}>
                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#ffffff" }}>
                  Pillars of the <span className="gold-gradient-text">NDR Encounter</span>
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "8px" }}>
                  Every Night of Divine Reversal is built on spiritual foundations designed to produce lasting breakthrough.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "20px",
                }}
              >
                {[
                  {
                    title: "Prophetic Prayers",
                    desc: "Targeted, intensive midnight intercession addressing long-standing strongholds, negative cycles, and spiritual resistance.",
                  },
                  {
                    title: "Divine Declarations",
                    desc: "Apostolic and prophetic decrees released to enforce God's original blueprint and destiny for every attendee.",
                  },
                  {
                    title: "Miracles & Healing",
                    desc: "Demonstration of the power of the Holy Spirit delivering instant healing, supernatural deliverances, and life transformations.",
                  },
                  {
                    title: "Consecrated Praise",
                    desc: "High-voltage worship and praise that invades spiritual atmospheres, setting the stage for supernatural reversals.",
                  },
                ].map((pillar, idx) => (
                  <div
                    key={idx}
                    className="glass-card"
                    style={{
                      padding: "26px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderTop: "3px solid var(--gold-primary)",
                      borderRadius: "12px",
                    }}
                  >
                    <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", marginBottom: "10px" }}>
                      {pillar.title}
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Attendance & Virtual Participation */}
            <div
              className="glass-card"
              style={{
                padding: "36px",
                borderRadius: "16px",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                background: "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(6, 9, 19, 0.95) 100%)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "24px",
                }}
              >
                <div style={{ maxWidth: "620px" }}>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#ffffff", marginBottom: "10px" }}>
                    Physical Sanctuary & Global Virtual Broadcast
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                    NDR connects believers across all continents. Physical presence at The Ark of Light for All Nations is reserved for the full choir, pastors, ministers, and testifiers, while members and families participate from their homes and watch parties online.
                  </p>
                </div>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link
                    href="/how-to-prepare"
                    className="guide-cta-btn-primary"
                    style={{ textDecoration: "none" }}
                  >
                    How to Prepare
                  </Link>
                  <Link
                    href="/register"
                    className="guide-cta-btn-secondary"
                    style={{ textDecoration: "none" }}
                  >
                    Register Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: The Prophet Hosting the Program */}
        <section style={{ backgroundColor: "var(--bg-alt)" }}>
          <Convener />
        </section>
      </main>

      <Footer />
    </>
  );
}
