"use client";

import React from "react";
import { NDR_DATA } from "@/data/ndrContent";

export default function UpcomingEvents() {
  const { eventMeta } = NDR_DATA;

  // Generate .ics calendar invite
  const downloadCalendarInvite = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//NDR//Night of Divine Reversal 13//EN",
      "BEGIN:VEVENT",
      "UID:ndr-13-20261106@gospelpillars.org",
      "DTSTAMP:20260918T120000Z",
      "DTSTART:20261106T190000Z",
      "DTEND:20261107T050000Z",
      "SUMMARY:Night of Divine Reversal (NDR 13) - Prophet Isaiah Macwealth",
      "DESCRIPTION:Grand Finale of the 3 Days of Remembrance (Season 2). Supernatural turnaround and decisive spiritual intervention.",
      "LOCATION:The Ark of Light for All Nations, Plot 11, Kudirat Abiola Way, Alausa, Ikeja, Lagos, Nigeria",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "NDR-13-Event.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="events" className="section-wrapper">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">Upcoming Event Spotlight</div>
          <h2 className="section-title">
            Night of Divine Reversal <span className="gold-gradient-text">(NDR 13)</span>
          </h2>
          <p className="section-subtitle">
            Mark your calendar and prepare your heart. The bi-monthly and quarterly climactic vigil returns on Friday, 6th November 2026.
          </p>
        </div>

        {/* Feature Event Banner Card */}
        <div
          style={{
            position: "relative",
            borderRadius: "var(--radius-lg)",
            background:
              "linear-gradient(135deg, rgba(30, 27, 75, 0.6) 0%, rgba(15, 23, 42, 0.9) 60%, rgba(6, 9, 19, 0.95) 100%)",
            border: "1px solid rgba(245, 158, 11, 0.35)",
            padding: "40px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(245, 158, 11, 0.15)",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "36px",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-full)",
                  background: "rgba(245, 158, 11, 0.15)",
                  color: "var(--gold-light)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                <span>Grand Finale</span>
                <span>•</span>
                <span>Season 2</span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "#ffffff",
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}
              >
                Night of Divine Reversal (NDR 13)
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.05rem",
                  lineHeight: 1.65,
                  marginBottom: "28px",
                }}
              >
                Scheduled to hold on Friday, 6th November 2026 as the Grand Finale of the 3 Days of Remembrance (Season 2) at The Ark of Light for All Nations.
              </p>

              {/* Event Metadata Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "16px",
                  marginBottom: "32px",
                }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    padding: "14px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Date & Day
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", marginTop: "2px" }}>
                    {eventMeta.dateDisplay}
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    padding: "14px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Time
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--gold-light)", marginTop: "2px" }}>
                    {eventMeta.timeDisplay}
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    padding: "14px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-subtle)",
                    gridColumn: "span 2",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Venue & Address
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginTop: "2px" }}>
                    {eventMeta.venue}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                    {eventMeta.address}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a href="#register" className="btn-primary">
                  Register for Free
                </a>
                <button onClick={downloadCalendarInvite} className="btn-secondary">
                  📅 Add to Calendar (.ics)
                </button>
              </div>
            </div>

            {/* Quick Sequence Mini-Timeline */}
            <div
              style={{
                background: "rgba(6, 9, 19, 0.7)",
                borderRadius: "var(--radius-md)",
                padding: "28px",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--gold-light)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "18px",
                }}
              >
                Preceding Activities Itinerary
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {[
                  {
                    date: "2nd – 4th Nov 2026",
                    title: "Victory & Faith Classes (Season 2)",
                    note: "OneSound Bible Institute (OBI)",
                  },
                  {
                    date: "Wed. 4th Nov 2026",
                    title: "All Nations Remembrance & Revival Service",
                    note: "Global Intercessory Session (6 PM)",
                  },
                  {
                    date: "Thurs. 5th Nov 2026",
                    title: "Victory & Faith Remembrance Prayer Line",
                    note: "Sweet Water & Personal Ministration",
                  },
                  {
                    date: "Fri. 6th Nov 2026",
                    title: "Night of Divine Reversal (NDR 13)",
                    note: "Grand Finale Prophetic Vigil (8 PM Prompt)",
                    highlight: true,
                  },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "14px",
                      alignItems: "flex-start",
                      paddingBottom: idx < 3 ? "14px" : "0",
                      borderBottom: idx < 3 ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
                    }}
                  >
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: step.highlight ? "var(--gold-primary)" : "rgba(255, 255, 255, 0.1)",
                        color: step.highlight ? "#060913" : "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: step.highlight ? "var(--gold-light)" : "var(--text-muted)",
                          fontWeight: 700,
                        }}
                      >
                        {step.date}
                      </div>
                      <div
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: step.highlight ? "#ffffff" : "#e2e8f0",
                          marginTop: "2px",
                        }}
                      >
                        {step.title}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                        {step.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
