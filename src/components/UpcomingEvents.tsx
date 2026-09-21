"use client";

import React from "react";
import Link from "next/link";
import { NDR_DATA } from "@/data/ndrContent";

export default function UpcomingEvents() {
  const { eventMeta } = NDR_DATA;

  // Generate .ics calendar invite
  const downloadCalendarInvite = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//NDR//Night of Divine Reversal//EN",
      "BEGIN:VEVENT",
      "UID:ndr-virtual-20261002@gospelpillars.org",
      "DTSTAMP:20260921T180000Z",
      "DTSTART:20261002T190000Z",
      "DTEND:20261003T050000Z",
      "SUMMARY:Night of Divine Reversal (NDR) - Prophet Isaiah Macwealth",
      "DESCRIPTION:NDR Monthly Virtual Meeting. Supernatural turnaround and decisive spiritual intervention. Physical presence strictly for Full Choir, Pastors & Ministers, and Testifiers. Global livestream for all nations.",
      "LOCATION:The Ark of Light for All Nations, Plot 11, Kudirat Abiola Way, Alausa, Ikeja, Lagos, Nigeria",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "NDR-Virtual-Event.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="events" className="section-wrapper">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Night of Divine Reversal <span className="gold-gradient-text">(Monthly Virtual)</span>
          </h2>
          <p className="section-subtitle">
            Mark your calendar and prepare your heart. The next monthly virtual meeting holds on Friday, 2nd October 2026.
          </p>
        </div>

        {/* Feature Event Banner Card */}
        <div className="event-spotlight-card">
          <div className="event-spotlight-inner">
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
                <span>Monthly Virtual</span>
                <span>•</span>
                <span>October 2026</span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "#ffffff",
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}
              >
                🌙 Night of Divine Reversal (NDR)
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.05rem",
                  lineHeight: 1.65,
                  marginBottom: "28px",
                }}
              >
                Scheduled to hold on Friday, 2nd October 2026 as a Monthly Virtual Meeting. Physical attendance at The Ark of Light is strictly reserved for: 1. Full Choir, 2. All Pastors and Ministers, and 3. Testifiers. All other attendees join live virtually from across the nations.
              </p>

              {/* Event Metadata Grid */}
              <div className="event-meta-grid">
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    padding: "14px 16px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-subtle)",
                    minWidth: 0,
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Date & Day
                  </div>
                  <div style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)", fontWeight: 700, color: "#ffffff", marginTop: "4px", wordBreak: "break-word" }}>
                    {eventMeta.dateDisplay}
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    padding: "14px 16px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-subtle)",
                    minWidth: 0,
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Time
                  </div>
                  <div style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)", fontWeight: 700, color: "var(--gold-light)", marginTop: "4px", wordBreak: "break-word" }}>
                    {eventMeta.timeDisplay}
                  </div>
                </div>

                <div
                  className="event-venue-cell"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    padding: "14px 16px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-subtle)",
                    minWidth: 0,
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Venue & Address
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginTop: "4px", wordBreak: "break-word" }}>
                    {eventMeta.venue}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "4px", lineHeight: 1.5, wordBreak: "break-word" }}>
                    {eventMeta.address}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/register" className="btn-primary" style={{ flex: "1 1 180px", textAlign: "center" }}>
                  Register for Free
                </Link>
                <button onClick={downloadCalendarInvite} className="btn-secondary" style={{ flex: "1 1 180px", textAlign: "center" }}>
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
                    date: "28th – 30th Sept 2026",
                    title: "Faith & Victory Classes",
                    note: "OneSound Bible Institute (OBI)",
                  },
                  {
                    date: "Wed. 30th Sept 2026",
                    title: "All Nations Remembrance Prayer",
                    note: "Global Intercessory Session (6 PM)",
                  },
                  {
                    date: "Thurs. 1st Oct 2026",
                    title: "Remembrance Prayer Line",
                    note: "Sweet Water & Personal Ministration (10 AM)",
                  },
                  {
                    date: "Fri. 2nd Oct 2026",
                    title: "🌙 NDR Night — Virtual",
                    note: "Physical: Choir, Pastors, Ministers & Testifiers (8 PM Prompt)",
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
