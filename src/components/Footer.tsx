"use client";

import React from "react";
import Image from "next/image";
import { NDR_DATA } from "@/data/ndrContent";

export default function Footer() {
  const { eventMeta, contactInfo } = NDR_DATA;

  return (
    <footer
      style={{
        backgroundColor: "#03060c",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "70px 24px 30px 24px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          {/* Column 1: Brand & Ministry */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  position: "relative",
                  border: "1.5px solid rgba(245, 158, 11, 0.4)",
                  boxShadow: "0 0 15px rgba(245, 158, 11, 0.25)",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/ndr-logo.jpg"
                  alt="NDR Logo"
                  fill
                  sizes="44px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff" }}>
                NDR <span style={{ color: "var(--gold-light)", fontWeight: 400 }}>| Monthly</span>
              </div>
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "16px" }}>
              Night of Divine Reversal (NDR) is convened by Prophet Isaiah Macwealth as a monthly virtual prophetic meeting broadcast globally from The Ark of Light for All Nations.
            </p>

            <div style={{ fontSize: "0.8rem", color: "var(--gold-light)", fontWeight: 600 }}>
              Gospel Pillars International Churches
            </div>
          </div>

          {/* Column 3: Preparatory Seminars & Bible Institute */}
          <div>
            <h4 style={{ fontSize: "0.95rem", color: "#ffffff", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Victory & Faith Classes
            </h4>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "14px" }}>
              OneSound Bible Institute (OBI) conducts structured 7-week seminars and faith classes:
            </p>
            <div style={{ marginBottom: "16px" }}>
              <a
                href={eventMeta.vfcRegistrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
                style={{ padding: "8px 16px", fontSize: "0.8rem" }}
              >
                Register at OBI VFC ↗
              </a>
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
              &ldquo;Teaching the people to grow is the fastest way to eradicate their challenges.&rdquo;
            </div>
          </div>

          {/* Column 4: Headquarters & Live Streams */}
          <div>
            <h4 style={{ fontSize: "0.95rem", color: "#ffffff", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Headquarters
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "12px" }}>
              {contactInfo.headquarters}
              <br />
              {contactInfo.address}
            </p>
            <div style={{ fontSize: "0.85rem", color: "#ffffff", fontWeight: 600, marginBottom: "14px" }}>
              📞 {contactInfo.hotline1}
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href={eventMeta.youtubeLive}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "0.78rem",
                  color: "#ffffff",
                }}
              >
                YouTube
              </a>
              <a
                href={eventMeta.facebookLive}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "0.78rem",
                  color: "#ffffff",
                }}
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
          }}
        >
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} Night of Divine Reversal (NDR). Convened by Prophet Isaiah Macwealth. All rights reserved.
          </div>
          <div>
            The Ark of Light for All Nations • Lagos, Nigeria
          </div>
        </div>
      </div>
    </footer>
  );
}
