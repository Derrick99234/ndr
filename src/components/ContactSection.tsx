"use client";

import React, { useState } from "react";
import { NDR_DATA } from "@/data/ndrContent";

export default function ContactSection() {
  const { contactInfo, busRoutes } = NDR_DATA;
  const [activeTab, setActiveTab] = useState<"logistics" | "message">("logistics");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryData.name || !inquiryData.email || !inquiryData.message) return;

    setIsSending(true);
    try {
      // Sync inquiry directly to Google Sheet webhook
      const googleSheetPromise = fetch(
        "https://script.google.com/macros/s/AKfycbw-eAmm40lDAjZbZiJACEzqmPXZ6-4VxEWLQbUeF7W4btQbBTMqDfY8ZvMq1kY2uFXuww/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ticketId: "CONTACT-INQUIRY",
            fullName: inquiryData.name.trim(),
            email: inquiryData.email.trim(),
            phone: `'${inquiryData.subject?.trim() || "General Inquiry"}`,
            city: "",
            mode: "contact",
            isFirstTime: "",
            prayerLineInterest: "",
            prayerRequest: inquiryData.message.trim(),
          }),
        }
      ).catch((err) => console.warn("Direct contact sheet post:", err));

      // Also call /api/contact if on Node/Vercel
      const localApiPromise = fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiryData),
      }).catch(() => null);

      await Promise.race([
        googleSheetPromise,
        new Promise((resolve) => setTimeout(resolve, 1500)),
      ]);

      setContactSubmitted(true);
    } catch (err) {
      console.error("Failed to send contact inquiry:", err);
      setContactSubmitted(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Contact & <span className="gold-gradient-text">Logistics</span>
          </h2>
          <p className="section-subtitle">
            Need directions, free transportation pickup across Lagos, or prayer assistance? Here is how to reach us at The Ark of Light for All Nations.
          </p>
        </div>

        {/* 2-Column Info & Interactive Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "36px",
            marginBottom: "50px",
          }}
        >
          {/* Left: Venue & Ministry Headquarters */}
          <div className="glass-card" style={{ padding: "32px" }}>
            <div
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: "var(--radius-full)",
                background: "rgba(245, 158, 11, 0.15)",
                color: "var(--gold-light)",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Headquarters Sanctuary
            </div>

            <h3 style={{ fontSize: "1.45rem", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
              {contactInfo.headquarters}
            </h3>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>
              📍 {contactInfo.address}
            </p>

            {/* Quick Contact Numbers */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "1.2rem" }}>📞</span>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Enquiries & Direction Hotlines
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>
                    {contactInfo.hotline1} / {contactInfo.hotline2}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "1.2rem" }}>✉️</span>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    General & Prayer Line Email
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>
                    {contactInfo.email}
                  </div>
                </div>
              </div>
            </div>

            {/* Broadcast Platforms */}
            <div style={{ paddingTop: "20px", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--gold-light)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "12px",
                }}
              >
                Official Broadcast Platforms
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {contactInfo.broadcastPlatforms.map((platform, idx) => (
                  <a
                    key={idx}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      padding: "10px 14px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "8px",
                      transition: "border-color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = "var(--gold-primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border-subtle)")
                    }
                  >
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffffff" }}>
                      {platform.name}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "2px" }}>
                      {platform.handle}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Tabbed Bus Logistics or Contact Form */}
          <div className="glass-card" style={{ padding: "32px" }}>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "24px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                paddingBottom: "12px",
              }}
            >
              <button
                onClick={() => setActiveTab("logistics")}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: activeTab === "logistics" ? "var(--gold-light)" : "var(--text-muted)",
                  borderBottom: activeTab === "logistics" ? "2px solid var(--gold-primary)" : "none",
                  paddingBottom: "6px",
                }}
              >
                🚌 Free Lagos Bus Pickup
              </button>
              <button
                onClick={() => setActiveTab("message")}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: activeTab === "message" ? "var(--gold-light)" : "var(--text-muted)",
                  borderBottom: activeTab === "message" ? "2px solid var(--gold-primary)" : "none",
                  paddingBottom: "6px",
                }}
              >
                ✉️ Send a Message
              </button>
            </div>

            {activeTab === "logistics" && (
              <div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginBottom: "18px" }}>
                  Free bus transportation is arranged to convey worshippers safely to and from The Ark of Light for All Nations across designated Lagos pickup points:
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    maxHeight: "360px",
                    overflowY: "auto",
                    paddingRight: "6px",
                  }}
                >
                  {busRoutes.map((bus, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "12px 14px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "8px",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#ffffff" }}>
                          📍 {bus.pickupLocation}
                        </span>
                        <span
                          style={{
                            fontSize: "0.72rem",
                            color: "var(--gold-light)",
                            background: "rgba(245, 158, 11, 0.12)",
                            padding: "2px 8px",
                            borderRadius: "4px",
                          }}
                        >
                          {bus.departureTime}
                        </span>
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "4px" }}>
                        Landmark: {bus.landmark}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                        Contact: {bus.coordinatorContact}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "message" && (
              <div>
                {!contactSubmitted ? (
                  <form onSubmit={handleInquirySubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={inquiryData.name}
                        onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          background: "rgba(6, 9, 19, 0.8)",
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "6px",
                          color: "#ffffff",
                          fontSize: "0.9rem",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          background: "rgba(6, 9, 19, 0.8)",
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "6px",
                          color: "#ffffff",
                          fontSize: "0.9rem",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Enquiry / Testimony / Assistance"
                        value={inquiryData.subject}
                        onChange={(e) => setInquiryData({ ...inquiryData, subject: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          background: "rgba(6, 9, 19, 0.8)",
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "6px",
                          color: "#ffffff",
                          fontSize: "0.9rem",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                        Message
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Type your message or prayer request..."
                        value={inquiryData.message}
                        onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          background: "rgba(6, 9, 19, 0.8)",
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "6px",
                          color: "#ffffff",
                          fontSize: "0.9rem",
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="btn-primary"
                      style={{
                        padding: "12px",
                        width: "100%",
                        marginTop: "6px",
                        opacity: isSending ? 0.7 : 1,
                        cursor: isSending ? "wait" : "pointer",
                      }}
                    >
                      {isSending ? "Sending Message..." : "Send Message"}
                    </button>
                  </form>
                ) : (
                  <div style={{ textAlign: "center", padding: "30px 10px" }}>
                    <div style={{ fontSize: "2rem", marginBottom: "10px" }}>✉️</div>
                    <h4 style={{ fontSize: "1.2rem", color: "#ffffff", marginBottom: "6px" }}>
                      Message Received!
                    </h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
                      Thank you, {inquiryData.name}. Our prayer and protocol team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setContactSubmitted(false);
                        setInquiryData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="btn-outline-gold"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
