"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { NDR_DATA } from "@/data/ndrContent";

export default function Convener() {
  const { convener } = NDR_DATA;
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open to prevent page scrolling underneath
  useEffect(() => {
    if (isBioModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBioModalOpen]);

  return (
    <section id="convener" className="section-wrapper">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div
            style={{
              display: "inline-block",
              background: "rgba(245, 158, 11, 0.12)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              color: "var(--gold-light)",
              padding: "4px 14px",
              borderRadius: "var(--radius-full)",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Apostolic & Prophetic Leadership
          </div>
          <h2 className="section-title">
            About <span className="gold-gradient-text">Prophet Isaiah Macwealth</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: "800px" }}>
            Senior Pastor, Gospel Pillars Intl. Churches worldwide | Founder, OneSound Revival Fellowship | Convener, Night of Divine Reversal (NDR)
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "50px",
            alignItems: "flex-start",
          }}
        >
          {/* Left Column: Portrait */}
          <div
            style={{
              position: "relative",
              maxWidth: "460px",
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
                priority
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
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", letterSpacing: "0.02em" }}>
                  {convener.name}
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--gold-light)", marginTop: "4px", fontWeight: 600 }}>
                  Dr. Isaiah Wealth
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
              Revelation 10:11 Calling
            </div>
          </div>

          {/* Right Column: Bio & Quote Details */}
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
                — Prophetic Principle Anchoring the Faith & Victory Classes
              </div>
            </div>

            {/* Official Bio Paragraphs (Stopping at divine turnaround.) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {convener.bio.slice(0, 3).map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: "0.98rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Read More Button */}
            <div style={{ marginTop: "20px" }}>
              <button
                type="button"
                onClick={() => setIsBioModalOpen(true)}
                className="btn-outline-gold"
                style={{
                  padding: "9px 24px",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Read More →
              </button>
            </div>
          </div>
        </div>

        {/* Full Biography Popup Modal (Portaled directly to document.body) */}
        {mounted && isBioModalOpen && createPortal(
          <div
            className="modal-overlay"
            onClick={() => setIsBioModalOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100dvh",
              backgroundColor: "rgba(3, 7, 18, 0.9)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              zIndex: 999999, // Sits strictly on top of everything, including fixed navbar (z-index: 1000)
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "max(32px, 5vh) 20px",
            }}
          >
            <div
              className="modal-content"
              style={{
                maxWidth: "720px",
                width: "100%",
                maxHeight: "min(84vh, 800px)",
                overflowY: "auto",
                padding: "36px",
                position: "relative",
                backgroundColor: "#0d1424",
                border: "1px solid rgba(245, 158, 11, 0.4)",
                boxShadow: "0 30px 100px rgba(0, 0, 0, 0.95), 0 0 45px rgba(245, 158, 11, 0.2)",
                borderRadius: "var(--radius-lg)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setIsBioModalOpen(false)}
                aria-label="Close biography modal"
              >
                ✕
              </button>

              <div style={{ marginBottom: "24px", paddingRight: "40px" }}>
                <h3
                  style={{
                    fontSize: "clamp(1.25rem, 3vw, 1.65rem)",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.3,
                  }}
                >
                  ABOUT PROPHET <span className="gold-gradient-text">ISAIAH MACWEALTH</span>
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {convener.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    style={{
                      fontSize: "0.98rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div
                style={{
                  marginTop: "28px",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  type="button"
                  onClick={() => setIsBioModalOpen(false)}
                  className="btn-primary"
                  style={{ padding: "8px 24px", fontSize: "0.85rem" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}
