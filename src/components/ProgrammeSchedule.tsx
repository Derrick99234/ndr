"use client";

import React, { useState } from "react";
import { NDR_DATA } from "@/data/ndrContent";

export default function ProgrammeSchedule() {
  const [activeTab, setActiveTab] = useState<"week" | "seminars" | "threeDays">("week");

  return (
    <section id="schedule" className="section-wrapper">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">Structured Programme</div>
          <h2 className="section-title">
            Programme <span className="gold-gradient-text">Schedule</span>
          </h2>
          <p className="section-subtitle">
            The Night of Divine Reversal is preceded by a week-long set of spiritual activities and structured preparatory seminars.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          {[
            { id: "week", label: "Week-Long Activities" },
            { id: "seminars", label: "7-Week Victory & Faith Seminars" },
            { id: "threeDays", label: "3 Days of Remembrance (Season 2)" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(tab.id as "week" | "seminars" | "threeDays")
                }
                style={{
                  padding: "12px 24px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  transition: "all 0.25s ease",
                  backgroundColor: isActive ? "var(--gold-primary)" : "rgba(255, 255, 255, 0.05)",
                  color: isActive ? "#060913" : "var(--text-secondary)",
                  border: isActive ? "1px solid var(--gold-primary)" : "1px solid var(--border-subtle)",
                  boxShadow: isActive ? "0 4px 20px rgba(245, 158, 11, 0.3)" : "none",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Week-Long NDR Schedule */}
        {activeTab === "week" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {NDR_DATA.weekSchedule.map((day, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  borderLeft: day.highlight
                    ? "4px solid var(--gold-primary)"
                    : "4px solid rgba(255, 255, 255, 0.15)",
                  background: day.highlight
                    ? "rgba(245, 158, 11, 0.05)"
                    : "var(--bg-card)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "16px",
                    marginBottom: "12px",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "4px 12px",
                        borderRadius: "var(--radius-full)",
                        background: day.highlight
                          ? "var(--gold-gradient)"
                          : "rgba(255, 255, 255, 0.08)",
                        color: day.highlight ? "#060913" : "var(--text-primary)",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: "8px",
                      }}
                    >
                      {day.dayTag}
                    </span>
                    <h3 style={{ fontSize: "1.35rem", color: "#ffffff", fontWeight: 700 }}>
                      {day.title}
                    </h3>
                    <div style={{ fontSize: "0.9rem", color: "var(--gold-light)", fontWeight: 500 }}>
                      {day.subtitle}
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#ffffff" }}>
                      ⏰ {day.time}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "2px" }}>
                      📍 {day.venue}
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    marginBottom: "18px",
                  }}
                >
                  {day.description}
                </p>

                {day.actionText && day.actionUrl && (
                  <div>
                    <a
                      href={day.actionUrl}
                      target={day.actionUrl.startsWith("http") ? "_blank" : undefined}
                      rel={day.actionUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={day.highlight ? "btn-primary" : "btn-outline-gold"}
                      style={{
                        padding: "8px 20px",
                        fontSize: "0.85rem",
                      }}
                    >
                      {day.actionText} →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: 7-Week Victory & Faith Seminars */}
        {activeTab === "seminars" && (
          <div>
            <div
              style={{
                background: "rgba(245, 158, 11, 0.06)",
                border: "1px solid rgba(245, 158, 11, 0.2)",
                borderRadius: "var(--radius-md)",
                padding: "24px",
                marginBottom: "32px",
              }}
            >
              <h3 style={{ color: "#ffffff", fontSize: "1.2rem", marginBottom: "8px" }}>
                Victory & Faith Seminars (Session 2 Schedule)
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                As part of the preparatory process for the Victory and Faith Classes, the OneSound Bible Institute (OBI) conducts a structured seven-week Seminar Series on Thursdays designed to establish a strong biblical foundation for your spiritual development and faith.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "18px",
              }}
            >
              {NDR_DATA.sevenWeekSeminars.map((seminar, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: "22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          color: "var(--gold-light)",
                          background: "rgba(245, 158, 11, 0.1)",
                          padding: "4px 10px",
                          borderRadius: "var(--radius-full)",
                        }}
                      >
                        {seminar.date}
                      </span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                          fontWeight: 600,
                          textTransform: "uppercase",
                        }}
                      >
                        {seminar.tag}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontSize: "1.1rem",
                        color: "#ffffff",
                        fontWeight: 700,
                        marginBottom: "10px",
                      }}
                    >
                      {seminar.title}
                    </h4>

                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                      {seminar.focus}
                    </p>
                  </div>

                  <div style={{ marginTop: "16px" }}>
                    <a
                      href={NDR_DATA.eventMeta.vfcRegistrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.825rem",
                        color: "var(--gold-light)",
                        fontWeight: 600,
                      }}
                    >
                      Register for Seminar →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: 3 Days of Remembrance (Season 2) */}
        {activeTab === "threeDays" && (
          <div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "24px",
                marginBottom: "32px",
              }}
            >
              <h3 style={{ color: "#ffffff", fontSize: "1.2rem", marginBottom: "6px" }}>
                3 Days of Remembrance (Season 2) • November 2026
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>
                The sacred countdown and itinerary leading to the Night of Divine Reversal 13.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {NDR_DATA.threeDaysRemembrance.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "4px 10px",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(245, 158, 11, 0.15)",
                        color: "var(--gold-light)",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        marginBottom: "6px",
                      }}
                    >
                      {item.dayTag}
                    </span>
                    <h4 style={{ fontSize: "1.2rem", color: "#ffffff", fontWeight: 700 }}>
                      {item.title}
                    </h4>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "2px" }}>
                      {item.subtitle}
                    </div>
                  </div>

                  <div>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      {item.description}
                    </p>
                    <div style={{ fontSize: "0.8rem", color: "#ffffff", fontWeight: 600, marginTop: "6px" }}>
                      ⏰ {item.time} | 📍 {item.venue}
                    </div>
                  </div>

                  {item.actionText && item.actionUrl && (
                    <div style={{ textAlign: "right" }}>
                      <a
                        href={item.actionUrl}
                        target={item.actionUrl.startsWith("http") ? "_blank" : undefined}
                        rel={item.actionUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="btn-outline-gold"
                        style={{ padding: "8px 18px", fontSize: "0.85rem" }}
                      >
                        {item.actionText}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
