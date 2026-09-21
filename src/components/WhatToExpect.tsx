import React from "react";
import { NDR_DATA } from "@/data/ndrContent";

export default function WhatToExpect() {
  const iconsMap: Record<string, string> = {
    praise: "🙌",
    worship: "🕊️",
    fellowship: "🤝",
    teaching: "📖",
    impartation: "⚡",
    direction: "🧭",
    declarations: "🗣️",
    miracles: "✨",
    wonders: "🌟",
  };

  return (
    <section id="expect" className="section-wrapper" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            What to Expect at <span className="gold-gradient-text">NDR</span>
          </h2>
          <p className="section-subtitle">
            Prepare your heart for a profound spiritual encounter. Here is what characterizes the Night of Divine Reversal.
          </p>
        </div>

        {/* 9 Manifestation Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {NDR_DATA.whatToExpect.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div>
                <div
                  style={{
                    marginBottom: "16px",
                  }}
                >
                  <span style={{ fontSize: "2.2rem" }}>
                    {iconsMap[item.id] || "✨"}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    color: "#ffffff",
                    marginBottom: "10px",
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "14px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.8rem",
                  color: "var(--gold-light)",
                  fontWeight: 600,
                }}
              >
                <span>Prophetic Dimension</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
