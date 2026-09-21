import React from "react";
import Image from "next/image";
import { NDR_DATA } from "@/data/ndrContent";

export default function Convener() {
  const { convener } = NDR_DATA;

  return (
    <section id="convener" className="section-wrapper">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Prophet <span className="gold-gradient-text">Isaiah Macwealth</span>
          </h2>
          <p className="section-subtitle">
            Senior Pastor & Global President, Gospel Pillars Intl. Church | Founder, OneSound Bible Institute
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "50px",
            alignItems: "center",
          }}
        >
          {/* Portrait Image Card */}
          <div
            style={{
              position: "relative",
              maxWidth: "480px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "4/5",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid rgba(245, 158, 11, 0.35)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(245, 158, 11, 0.15)",
              }}
            >
              <Image
                src={convener.image}
                alt="Prophet Isaiah Macwealth"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 65%, rgba(6, 9, 19, 0.95) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  right: "20px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff" }}>
                  {convener.name}
                </div>
              </div>
            </div>

            {/* Decorative Gold Accent Tag */}
            <div
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                background: "var(--gold-gradient)",
                color: "#060913",
                padding: "6px 14px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.75rem",
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
                zIndex: 2,
              }}
            >
              Apostolic & Prophetic Mantle
            </div>
          </div>

          {/* Bio & Quote Details */}
          <div>
            {/* Quote Card */}
            <div
              style={{
                padding: "24px",
                borderRadius: "var(--radius-md)",
                background: "rgba(245, 158, 11, 0.06)",
                borderLeft: "4px solid var(--gold-primary)",
                borderTop: "1px solid rgba(245, 158, 11, 0.15)",
                borderRight: "1px solid rgba(245, 158, 11, 0.15)",
                borderBottom: "1px solid rgba(245, 158, 11, 0.15)",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  fontSize: "1.15rem",
                  fontStyle: "italic",
                  color: "#fef3c7",
                  lineHeight: 1.6,
                  fontWeight: 600,
                }}
              >
                &ldquo;{convener.quote}&rdquo;
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--gold-light)",
                  fontWeight: 700,
                  marginTop: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                — Prophetic Principle Anchoring the Victory & Faith Classes
              </div>
            </div>

            {/* Bio Paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {convener.bio.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Action buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
                marginTop: "32px",
              }}
            >
              <a
                href={NDR_DATA.eventMeta.vfcRegistrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Register for Victory & Faith Classes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
