"use client";

import React, { useState } from "react";
import { NDR_DATA } from "@/data/ndrContent";

export default function RegisterSection() {
  const [mode, setMode] = useState<"physical" | "virtual">("virtual");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    isFirstTime: "yes",
    prayerLineInterest: false,
    prayerRequest: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitting(true);
    const generatedId = `NDR13-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      const payload = {
        timestamp: new Date().toISOString(),
        ticketId: generatedId,
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone ? `'${formData.phone.trim()}` : "",
        city: formData.city.trim(),
        mode,
        isFirstTime: formData.isFirstTime,
        prayerLineInterest: formData.prayerLineInterest ? "Yes" : "No",
        prayerRequest: formData.prayerRequest.trim(),
      };

      // Direct sync to Google Sheets webhook (works on 100% static hosting like DirectAdmin public_html)
      const googleSheetPromise = fetch(
        "https://script.google.com/macros/s/AKfycbw-eAmm40lDAjZbZiJACEzqmPXZ6-4VxEWLQbUeF7W4btQbBTMqDfY8ZvMq1kY2uFXuww/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      ).catch((err) => console.warn("Google Sheet direct post:", err));

      // Call PHP handler for DirectAdmin Apache server
      fetch("/api/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => null);

      // Also call /api/register if running on a Node server or Vercel
      fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, mode }),
      }).catch(() => null);

      // Wait briefly for network dispatch so user experience remains swift and reliable
      await Promise.race([
        googleSheetPromise,
        new Promise((resolve) => setTimeout(resolve, 1500)),
      ]);

      setTicketId(generatedId);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Registration submit error:", err);
      setTicketId(generatedId);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      isFirstTime: "yes",
      prayerLineInterest: false,
      prayerRequest: "",
    });
  };

  return (
    <section id="register" className="section-wrapper">
      <div className="section-container" style={{ maxWidth: "800px" }}>
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Register for <span className="gold-gradient-text">NDR</span>
          </h2>
          <p className="section-subtitle">
            NDR is now a <strong>Monthly Virtual Meeting</strong>. Register below for live broadcast access. Physical attendance at The Ark of Light is strictly reserved for Full Choir, Pastors & Ministers, and Testifiers.
          </p>
        </div>

        {/* Form or Confirmation Card */}
        <div
          className="glass-card"
          style={{
            padding: "36px",
            border: "1px solid rgba(245, 158, 11, 0.3)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(245, 158, 11, 0.1)",
          }}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Attendance Mode Switcher */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--text-secondary)",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Select Mode of Attendance
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "10px" }}>
                  <button
                    type="button"
                    onClick={() => setMode("virtual")}
                    style={{
                      padding: "14px",
                      borderRadius: "10px",
                      background: mode === "virtual" ? "rgba(245, 158, 11, 0.15)" : "rgba(255, 255, 255, 0.04)",
                      border: mode === "virtual" ? "2px solid var(--gold-primary)" : "1px solid var(--border-subtle)",
                      color: mode === "virtual" ? "#ffffff" : "var(--text-secondary)",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      textAlign: "center",
                      transition: "all 0.2s ease",
                    }}
                  >
                    📡 Virtual (General Public Stream)
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("physical")}
                    style={{
                      padding: "14px",
                      borderRadius: "10px",
                      background: mode === "physical" ? "rgba(245, 158, 11, 0.15)" : "rgba(255, 255, 255, 0.04)",
                      border: mode === "physical" ? "2px solid var(--gold-primary)" : "1px solid var(--border-subtle)",
                      color: mode === "physical" ? "#ffffff" : "var(--text-secondary)",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      textAlign: "center",
                      transition: "all 0.2s ease",
                    }}
                  >
                    🏛️ Physical (Restricted Group)
                  </button>
                </div>
                {mode === "physical" ? (
                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: "8px",
                      background: "rgba(239, 68, 68, 0.1)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      color: "#fca5a5",
                      fontSize: "0.8rem",
                      lineHeight: 1.5,
                    }}
                  >
                    ⚠️ <strong>Physical Attendance Restriction:</strong> Physical attendance at The Ark of Light is strictly for: <strong>1. Full Choir</strong>, <strong>2. All Pastors and Ministers</strong>, and <strong>3. Testifiers</strong>.
                  </div>
                ) : (
                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: "8px",
                      background: "rgba(245, 158, 11, 0.08)",
                      border: "1px solid rgba(245, 158, 11, 0.25)",
                      color: "var(--gold-light)",
                      fontSize: "0.8rem",
                      lineHeight: 1.5,
                    }}
                  >
                    ✨ <strong>Virtual Access:</strong> Join the global live broadcast from any nation via YouTube and Facebook Live with instant pass delivery.
                  </div>
                )}
              </div>

              {/* Name & Email */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                <div>
                  <label
                    htmlFor="fullName"
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      marginBottom: "6px",
                      fontWeight: 600,
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(6, 9, 19, 0.8)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      marginBottom: "6px",
                      fontWeight: 600,
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(6, 9, 19, 0.8)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>
              </div>

              {/* Phone & City */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                <div>
                  <label
                    htmlFor="phone"
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      marginBottom: "6px",
                      fontWeight: 600,
                    }}
                  >
                    Phone / WhatsApp Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+234 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(6, 9, 19, 0.8)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      marginBottom: "6px",
                      fontWeight: 600,
                    }}
                  >
                    City & Country
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="e.g. Lagos, Nigeria"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(6, 9, 19, 0.8)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>
              </div>

              {/* Sweet Water Prayer Line Interest */}
              <div
                style={{
                  background: "rgba(245, 158, 11, 0.08)",
                  border: "1px solid rgba(245, 158, 11, 0.25)",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    color: "#fef3c7",
                    lineHeight: 1.45,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={formData.prayerLineInterest}
                    onChange={(e) =>
                      setFormData({ ...formData, prayerLineInterest: e.target.checked })
                    }
                    style={{
                      marginTop: "3px",
                      width: "18px",
                      height: "18px",
                      accentColor: "var(--gold-primary)",
                      cursor: "pointer",
                    }}
                  />
                  <span>
                    <strong>Victory & Faith Remembrance Prayer Line:</strong> I wish to be scheduled for one-on-one ministration & Sweet Water prayer line on Thursday with Prophet Isaiah Macwealth.
                  </span>
                </label>
              </div>

              {/* Personal Reversal Point */}
              <div>
                <label
                  htmlFor="prayerRequest"
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    marginBottom: "6px",
                    fontWeight: 600,
                  }}
                >
                  Your Divine Reversal Prayer Point / Target (Optional & Confidential)
                </label>
                <textarea
                  id="prayerRequest"
                  rows={3}
                  placeholder="State the pattern, sickness, stagnation, or embargo you want reversed by the power of God..."
                  value={formData.prayerRequest}
                  onChange={(e) => setFormData({ ...formData, prayerRequest: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(6, 9, 19, 0.8)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "8px",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    resize: "vertical",
                  }}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  padding: "16px",
                  fontSize: "1rem",
                  marginTop: "8px",
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? "wait" : "pointer",
                }}
              >
                {isSubmitting ? "Generating Your Official Pass..." : "Complete Registration (Free)"}
              </button>

              {/* Link to OneSound Bible Institute */}
              <div
                style={{
                  textAlign: "center",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  paddingTop: "10px",
                }}
              >
                Interested in the 7-week Victory & Faith Classes?{" "}
                <a
                  href={NDR_DATA.eventMeta.vfcRegistrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--gold-light)", textDecoration: "underline" }}
                >
                  Register at OneSound Bible Institute (OBI) ↗
                </a>
              </div>
            </form>
          ) : (
            /* Confirmation Pass Card */
            <div style={{ textAlign: "center", padding: "16px" }}>
              <div
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "50%",
                  background: "var(--gold-gradient)",
                  color: "#060913",
                  fontSize: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px auto",
                  boxShadow: "0 0 30px rgba(245, 158, 11, 0.5)",
                }}
              >
                ✓
              </div>

              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--gold-light)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Seat Reserved Successfully
              </div>

              <h3 style={{ fontSize: "1.75rem", color: "#ffffff", marginTop: "6px", marginBottom: "12px" }}>
                Welcome, {formData.fullName}!
              </h3>

              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "24px" }}>
                Your pass has been generated for <strong>Night of Divine Reversal (NDR)</strong> ({mode === "physical" ? "Physical Pass (Choir / Pastors & Ministers / Testifiers)" : "Virtual Global Livestream"}). A confirmation has been logged for <strong>{formData.email}</strong>.
              </p>

              {/* Pass Badge */}
              <div
                style={{
                  background: "rgba(6, 9, 19, 0.85)",
                  border: "1px dashed var(--gold-primary)",
                  borderRadius: "12px",
                  padding: "20px",
                  maxWidth: "420px",
                  margin: "0 auto 28px auto",
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>REGISTRATION CODE</span>
                  <span style={{ fontSize: "0.9rem", fontWeight: 800, color: "var(--gold-light)" }}>
                    {ticketId}
                  </span>
                </div>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                  🌙 Night of Divine Reversal (NDR)
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  Friday, 2nd October 2026 • 8:00 PM WAT (Virtual Vigil)
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "8px" }}>
                  Venue: {NDR_DATA.eventMeta.venue}, Plot 11, Kudirat Abiola Way, Alausa, Ikeja
                </div>
                {formData.prayerLineInterest && (
                  <div
                    style={{
                      marginTop: "12px",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      background: "rgba(245, 158, 11, 0.15)",
                      color: "var(--gold-light)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                    }}
                  >
                    ★ Sweet Water Prayer Line Scheduled for Thursday
                  </div>
                )}
              </div>

              <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
                <a href="#schedule" className="btn-secondary">
                  View Programme Schedule
                </a>
                <button onClick={handleReset} className="btn-outline-gold">
                  Register Another Attendee
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
