import React from "react";
import Image from "next/image";
import { NDR_DATA } from "@/data/ndrContent";

export default function AboutNDR() {
  return (
    <section id="about" className="section-wrapper" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">About NDR</div>
          <h2 className="section-title">
            What is <span className="gold-gradient-text">Night of Divine Reversal?</span>
          </h2>
          <p className="section-subtitle">
            A decisive spiritual intervention convened by Prophet Isaiah Macwealth at The Ark of Light for All Nations.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "center",
            marginBottom: "64px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.65rem",
                lineHeight: 1.3,
                marginBottom: "20px",
                color: "#ffffff",
              }}
            >
              A Prophetic Vigil Held as a <span style={{ color: "var(--gold-light)" }}>Monthly Virtual Meeting</span>
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              {NDR_DATA.aboutNDR.summary}
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1rem",
                lineHeight: 1.7,
                marginBottom: "28px",
              }}
            >
              {NDR_DATA.aboutNDR.atmosphere}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                maxWidth: "460px",
              }}
            >
              <div
                style={{
                  padding: "12px 14px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-sm)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "clamp(0.95rem, 3vw, 1.2rem)", fontWeight: 800, color: "var(--gold-light)", whiteSpace: "nowrap" }}>
                  Monthly Virtual
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                  Meeting Format
                </div>
              </div>

              <div
                style={{
                  padding: "12px 14px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-sm)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "clamp(0.95rem, 3vw, 1.2rem)", fontWeight: 800, color: "#ffffff", whiteSpace: "nowrap" }}>
                  All Nations
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                  Global HQ in Lagos
                </div>
              </div>
            </div>
          </div>

          {/* Ark of Light Image Card */}
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid rgba(245, 158, 11, 0.25)",
              boxShadow: "var(--shadow-lg), 0 0 30px rgba(0, 0, 0, 0.5)",
              height: "420px",
            }}
          >
            <Image
              src="/images/ark-of-light.jpg"
              alt="The Ark of Light for All Nations"
              fill
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(0deg, rgba(6, 9, 19, 0.9) 0%, transparent 60%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                left: "24px",
                right: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--gold-light)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                International Headquarters
              </div>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", marginTop: "4px" }}>
                The Ark of Light for All Nations
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                Plot 11, Kudirat Abiola Way, Alausa, Ikeja, Lagos, Nigeria
              </div>
            </div>
          </div>
        </div>

        {/* 5 Core Focus Areas */}
        <div style={{ marginTop: "40px" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <h3 style={{ fontSize: "1.5rem", color: "#ffffff" }}>
              Core Focus of the <span style={{ color: "var(--gold-light)" }}>Divine Reversal Encounter</span>
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: "6px" }}>
              Every element of NDR is laser-focused on decisive, supernatural spiritual breakthrough.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {NDR_DATA.aboutNDR.focusAreas.map((focus) => (
              <div
                key={focus.id}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    lineHeight: 1,
                  }}
                >
                  {focus.icon}
                </div>
                <h4 style={{ fontSize: "1.1rem", color: "#ffffff", fontWeight: 700 }}>
                  {focus.title}
                </h4>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {focus.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
