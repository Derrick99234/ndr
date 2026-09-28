"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GuidePage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "why" | "pre" | "during" | "post">("all");

  // Interactive Checklist State
  const [checklist, setChecklist] = useState<{ [key: string]: boolean }>({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
    item8: false,
  });

  const toggleCheck = (key: string) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const totalCount = Object.keys(checklist).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const shareText = `*NIGHT OF DIVINE REVERSAL 13 (VIRTUAL)*
Theme: Praise • Prophecy • Miracles
Convener: Prophet Isaiah Macwealth
Date: Friday, 2nd October 2026 | 11:00 PM (WAT)

Join our global virtual gathering for an extraordinary night of supernatural turnarounds! You can watch live from your home or join our watch party.

Watch Live on YouTube:
https://www.youtube.com/@isaiahmacwealth

#NightofDivineReversal13`;

  const copyShareText = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      <Navbar />

      <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-main)", color: "#f3f4f6" }}>
        {/* Hero Section */}
        <section
          style={{
            padding: "150px 24px 70px 24px",
            position: "relative",
            overflow: "hidden",
            background:
              "radial-gradient(ellipse at 50% 15%, rgba(245, 158, 11, 0.15) 0%, rgba(6, 9, 19, 0.98) 75%)",
            borderBottom: "1px solid rgba(245, 158, 11, 0.2)",
          }}
        >
          {/* Subtle Ambient Orbs */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "15%",
              width: "350px",
              height: "350px",
              background: "rgba(245, 158, 11, 0.08)",
              borderRadius: "50%",
              filter: "blur(90px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              right: "10%",
              width: "400px",
              height: "400px",
              background: "rgba(59, 130, 246, 0.06)",
              borderRadius: "50%",
              filter: "blur(100px)",
              pointerEvents: "none",
            }}
          />

          <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
            {/* Breadcrumb */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                marginBottom: "20px",
              }}
            >
              <Link href="/" style={{ color: "var(--gold-light)", textDecoration: "none" }}>
                Home
              </Link>
              <span>/</span>
              <span style={{ color: "var(--text-secondary)" }}>Members Participation Guide</span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "48px",
                alignItems: "center",
              }}
            >
              {/* Left Column: Heading & Briefing */}
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    background: "rgba(245, 158, 11, 0.12)",
                    border: "1px solid rgba(245, 158, 11, 0.3)",
                    color: "var(--gold-light)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "18px",
                  }}
                >
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b" }} />
                  Official Member Manual • NDR 13
                </div>

                <h1
                  style={{
                    fontSize: "clamp(2.3rem, 5vw, 3.8rem)",
                    fontWeight: 900,
                    lineHeight: 1.15,
                    marginBottom: "16px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Night of Divine Reversal 13 <br />
                  <span className="gold-gradient-text">Participation Guide</span>
                </h1>

                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.65,
                    color: "var(--text-secondary)",
                    marginBottom: "28px",
                    maxWidth: "580px",
                  }}
                >
                  NDR 13 is designed as a global virtual encounter. Instead of a single venue, this edition multiplies into thousands of consecrated homes, fellowships, and watch parties across cities and nations simultaneously.
                </p>

                {/* Event Schedule Quick Pills */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    gap: "12px",
                    marginBottom: "32px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "10px",
                      padding: "12px 16px",
                    }}
                  >
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Date</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginTop: "2px" }}>
                      Friday, 2nd Oct 2026
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "10px",
                      padding: "12px 16px",
                    }}
                  >
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Time</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fbbf24", marginTop: "2px" }}>
                      11:00 PM (WAT)
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "10px",
                      padding: "12px 16px",
                    }}
                  >
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Format</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginTop: "2px" }}>
                      Global Virtual Broadcast
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                  <a
                    href="#checklist"
                    className="btn-primary"
                    style={{ padding: "14px 24px", fontSize: "0.95rem", display: "inline-flex", alignItems: "center", gap: "8px" }}
                  >
                    Watch Party Checklist
                  </a>
                  <button
                    onClick={copyShareText}
                    className="btn-outline-gold"
                    style={{
                      padding: "14px 22px",
                      fontSize: "0.95rem",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "transparent",
                    }}
                  >
                    {copied ? "Invitation Copied!" : "Copy Invitation Message"}
                  </button>
                  <Link
                    href="/register"
                    className="btn-outline-gold"
                    style={{ padding: "14px 20px", fontSize: "0.95rem" }}
                  >
                    Register Free
                  </Link>
                </div>
              </div>

              {/* Right Column: Official Flyer Visual */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "380px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "2px solid rgba(245, 158, 11, 0.4)",
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(245, 158, 11, 0.2)",
                  }}
                >
                  <Image
                    src="/images/ndr13-guide-flyer.jpg"
                    alt="NDR 13 Preparation Flyer - Prophet Isaiah Macwealth"
                    width={400}
                    height={520}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    priority
                  />
                  <div
                    style={{
                      padding: "14px 18px",
                      background: "rgba(6, 9, 19, 0.95)",
                      borderTop: "1px solid rgba(245, 158, 11, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffffff" }}>Official Event Banner</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--gold-light)" }}>Save & Share on WhatsApp / Socials</div>
                    </div>
                    <a
                      href="/images/ndr13-guide-flyer.jpg"
                      download="NDR13-Preparation-Guide.jpg"
                      className="btn-outline-gold"
                      style={{ padding: "6px 14px", fontSize: "0.75rem", textDecoration: "none" }}
                    >
                      Download Flyer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Quick Jump Filter Bar */}
        <div
          style={{
            position: "sticky",
            top: "var(--navbar-height)",
            zIndex: 90,
            background: "rgba(6, 9, 19, 0.92)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "12px 24px",
          }}
        >
          <div
            className="section-container"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              overflowX: "auto",
              whiteSpace: "nowrap",
              scrollbarWidth: "none",
            }}
          >
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase" }}>
              Jump To:
            </span>
            {[
              { id: "model", label: "The Shift" },
              { id: "why-virtual", label: "Why Virtual?" },
              { id: "pre-meeting", label: "Pre-Meeting (10 Steps)" },
              { id: "during-meeting", label: "During Meeting" },
              { id: "post-meeting", label: "Post-Meeting" },
              { id: "responsibility", label: "Collective Mandate" },
              { id: "checklist", label: "Host Checklist" },
            ].map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                style={{
                  fontSize: "0.82rem",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "var(--text-secondary)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fbbf24";
                  e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>

        {/* Section: The New Paradigm (Multiplication Model) */}
        <section id="model" className="section-wrapper" style={{ paddingBottom: "40px" }}>
          <div className="section-container">
            <div className="section-header">
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: "rgba(245, 158, 11, 0.1)",
                  color: "var(--gold-light)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                A New Paradigm of Global Revival
              </div>
              <h2 className="section-title">
                From One Location to <span className="gold-gradient-text">Thousands of Altars</span>
              </h2>
              <p className="section-subtitle">
                NDR 13 is set to be unique from previous editions. Rather than centralizing all attendees physically at the Ark of Light, the meeting is broadcasting live to awaken spiritual encounters across every nation, city, and living room.
              </p>
            </div>

            {/* Visual Comparison Infographic */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
                marginTop: "30px",
              }}
            >
              {/* Previous Editions Card */}
              <div
                className="glass-card"
                style={{
                  padding: "30px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  background: "rgba(17, 24, 39, 0.4)",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700 }}>
                  Previous NDR Gatherings (1–12)
                </div>
                <h3 style={{ fontSize: "1.3rem", color: "#ffffff", margin: "10px 0 16px 0", fontWeight: 700 }}>
                  Centralized Physical Gathering
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: "#ef4444", fontWeight: "bold" }}>•</span>
                    <span><strong>Physical Space Limits:</strong> Restricted to the seating capacity of the Ark of Light auditorium.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: "#ef4444", fontWeight: "bold" }}>•</span>
                    <span><strong>Travel Friction:</strong> High cost and logistics of interstate and international travel for an all-night service.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: "#ef4444", fontWeight: "bold" }}>•</span>
                    <span><strong>Late-Night Transit:</strong> Risk and fatigue associated with moving late at night across sprawling cities.</span>
                  </li>
                </ul>
              </div>

              {/* NDR 13 Paradigm Card */}
              <div
                className="glass-card"
                style={{
                  padding: "30px",
                  border: "1.5px solid rgba(245, 158, 11, 0.4)",
                  background: "radial-gradient(ellipse at top left, rgba(245, 158, 11, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(245, 158, 11, 0.1)",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "var(--gold-light)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700 }}>
                  NDR 13 Virtual Edition
                </div>
                <h3 style={{ fontSize: "1.3rem", color: "#fbbf24", margin: "10px 0 16px 0", fontWeight: 700 }}>
                  The Decentralized Multiplication Model
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem", color: "#f3f4f6" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: "#10b981", fontWeight: "bold" }}>✓</span>
                    <span><strong>Boundless Capacity:</strong> Accommodates millions simultaneously with zero physical overflow or seating strain.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: "#10b981", fontWeight: "bold" }}>✓</span>
                    <span><strong>Home Altars:</strong> Consecrates homes and fellowships into active spiritual gathering points and watch parties.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: "#10b981", fontWeight: "bold" }}>✓</span>
                    <span><strong>Global Outreach:</strong> Allows first-time seekers to encounter Jesus from the comfort of their living rooms.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Why Virtual? (7 Strategic Reasons) */}
        <section id="why-virtual" className="section-wrapper">
          <div className="section-container">
            <div className="section-header">
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: "rgba(245, 158, 11, 0.1)",
                  color: "var(--gold-light)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Strategic Imperatives
              </div>
              <h2 className="section-title">
                Why <span className="gold-gradient-text">Virtual?</span>
              </h2>
              <p className="section-subtitle">
                Understanding the pastoral and divine wisdom behind transitioning NDR 13 into a global virtual broadcast.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
                marginTop: "30px",
              }}
            >
              {[
                {
                  number: "01",
                  title: "Limitation of Physical Space",
                  desc: "During NDR 12, the venue became overcrowded for an all-night meeting. The virtual format accommodates everyone without physical limits and eliminates late-night travel risks.",
                  tag: "Safety & Scale",
                },
                {
                  number: "02",
                  title: "Frictionless Global Participation",
                  desc: "Believers across continents can participate without travel costs or complex transit arrangements. You connect directly from wherever you are.",
                  tag: "Accessibility",
                },
                {
                  number: "03",
                  title: "Family & Watch Party Gatherings",
                  desc: "Families gather together at home in unity, while friends, youth networks, and fellowships organize dedicated watch parties in their respective cities.",
                  tag: "Communal Encounters",
                },
                {
                  number: "04",
                  title: "Exponential Viewership & Outreach",
                  desc: "People who have never attended NDR in person can be invited to watch the livestream. First-time viewers are introduced to the altar and connected to ongoing ministry resources.",
                  tag: "Evangelistic Reach",
                },
                {
                  number: "05",
                  title: "Amplified Digital Impact",
                  desc: "Unified member activity—liking, commenting, sharing, and reposting—catalyzes algorithms across YouTube and Facebook to broadcast Jesus to the nations.",
                  tag: "Digital Ministry",
                },
                {
                  number: "06",
                  title: "Meaningful Personal Involvement",
                  desc: "Every believer is empowered to become an ambassador. Your personal sphere—colleagues, neighbors, relatives, and alumni—can all be invited into your circle.",
                  tag: "Grassroots Ownership",
                },
                {
                  number: "07",
                  title: "Instant Clipping & Enduring Replay",
                  desc: "Watching from home allows members to immediately clip, quote, and forward prayers, testimonies, and declarations while the service is in progress, extending the meeting's lifespan.",
                  tag: "Ongoing Revival",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                      <span
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 900,
                          color: "var(--gold-light)",
                          fontFamily: "monospace",
                        }}
                      >
                        {item.number}
                      </span>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          padding: "3px 10px",
                          borderRadius: "9999px",
                          background: "rgba(255, 255, 255, 0.05)",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", marginBottom: "10px" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Pre-Meeting Guidelines (10 Action Steps) */}
        <section id="pre-meeting" className="section-wrapper" style={{ backgroundColor: "rgba(10, 15, 30, 0.4)" }}>
          <div className="section-container">
            <div className="section-header">
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: "rgba(245, 158, 11, 0.1)",
                  color: "var(--gold-light)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Actionable Preparation
              </div>
              <h2 className="section-title">
                Pre-Meeting <span className="gold-gradient-text">Guidelines</span>
              </h2>
              <p className="section-subtitle">
                10 intentional steps to prime your spirit, home, and network for the Friday all-night encounter.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
                marginTop: "30px",
              }}
            >
              {[
                {
                  step: "Step 01",
                  title: "Prepare for the Encounter",
                  desc: "Set time apart for prayer and fasting prior to the service. Approach the screen with the exact holy expectation and reverence you would hold if standing in the physical auditorium.",
                },
                {
                  step: "Step 02",
                  title: "The 'Do Not Watch Alone' Principle",
                  desc: "Intentionality multiplies anointing. Invite family members, neighbors, colleagues, and friends. Convert solitary viewing into a warm communal gathering in your home.",
                },
                {
                  step: "Step 03",
                  title: "Host an NDR Watch Party",
                  desc: "Designate your living room or fellowship venue as a worship sanctuary. Ensure sufficient seating, a good sound system, and snap photos or short videos to capture the gathering.",
                },
                {
                  step: "Step 04",
                  title: "Personally Invite People",
                  desc: "Do not depend on flyers alone. Send a personalized voice note, direct message, or call. Reach out specifically to people needing prayer, restoration, healing, or divine intervention.",
                },
                {
                  step: "Step 05",
                  title: "Distribute the Official Links",
                  desc: "Make joining effortless. Share the official YouTube and Facebook livestream links across your WhatsApp status, broadcast lists, and community channels ahead of time.",
                },
                {
                  step: "Step 06",
                  title: "Create Anticipation on Social Media",
                  desc: "Post countdown flyers, promotional videos, and personal excitement across WhatsApp, Facebook, Instagram, and X to signal the coming turnaround to your followers.",
                },
                {
                  step: "Step 07",
                  title: "Engage Official Ministry Posts",
                  desc: "Actively like, comment, and repost ministry declarations, testimonies, and video teasers. Consistent early engagement boosts platform visibility.",
                },
                {
                  step: "Step 08",
                  title: "Use the Official Campaign Hashtag",
                  desc: "Always include #NightofDivineReversal13 in your social posts. This unites individual conversations into a massive searchable online testimony stream.",
                },
                {
                  step: "Step 09",
                  title: "Mobilize Your Personal Network",
                  desc: "You have influence in unique circles—family chats, alumni boards, prayer cells, and professional teams. Activate these networks with intentional invitations.",
                },
                {
                  step: "Step 10",
                  title: "Prepare Your Physical Sanctuary",
                  desc: "Dress honorably, eliminate household clutter, and have your Bible, notebook, and communion ready. Ensure your space is welcoming, clean, and primed for praise.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: "26px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderTop: "3px solid var(--gold-primary)",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--gold-light)", textTransform: "uppercase", marginBottom: "8px" }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: During the Meeting Participation (6 Steps) */}
        <section id="during-meeting" className="section-wrapper">
          <div className="section-container">
            <div className="section-header">
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: "rgba(245, 158, 11, 0.1)",
                  color: "var(--gold-light)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Live Execution
              </div>
              <h2 className="section-title">
                During the Meeting <span className="gold-gradient-text">Participation</span>
              </h2>
              <p className="section-subtitle">
                How to maintain active spiritual discipline while engaging with the live broadcast from your location.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
                marginTop: "30px",
              }}
            >
              {[
                {
                  title: "Be Fully Present & Consecrated",
                  desc: "Connect early and avoid passive viewing. Stand during praise, kneel during prayer, and respond aloud to prophetic declarations as though you are in the front row.",
                },
                {
                  title: "Engage the Live Chat on YouTube & Facebook",
                  desc: "Add your voice to the global chorus. Type 'Amen', celebrate miracles, type down key revelations, and encourage international viewers in the chat stream.",
                },
                {
                  title: "Mid-Service Dynamic Link Dispatch",
                  desc: "When a prophetic word or prayer directly addresses a situation someone you know is facing, copy the livestream link immediately and forward it to them.",
                },
                {
                  title: "Broadcast from Your Platforms",
                  desc: "Share quotes and declarations that hit your spirit onto your WhatsApp status and Instagram stories in real-time, tagging the official ministry handle.",
                },
                {
                  title: "Relentlessly Bring Others In",
                  desc: "The service is an open door throughout the night. If a testimony reminds you of someone in need, reach out and bring them into the ongoing broadcast.",
                },
                {
                  title: "Make Your Watch Party Visible",
                  desc: "Capture respectful photos or brief video snippets of your group worshiping and share them online using #NightofDivineReversal13 to visualize the global gathering.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: "28px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(245, 158, 11, 0.15)", color: "#fbbf24", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.9rem", marginBottom: "14px" }}>
                    {idx + 1}
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Post-Meeting Activities (6 Steps) */}
        <section id="post-meeting" className="section-wrapper" style={{ backgroundColor: "rgba(10, 15, 30, 0.4)" }}>
          <div className="section-container">
            <div className="section-header">
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: "rgba(245, 158, 11, 0.1)",
                  color: "var(--gold-light)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Sustained Anointing
              </div>
              <h2 className="section-title">
                Post-Meeting <span className="gold-gradient-text">Activities</span>
              </h2>
              <p className="section-subtitle">
                The conversation does not end when the stream goes dark. Anchor the encounter into lasting spiritual fruits.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
                marginTop: "30px",
              }}
            >
              {[
                {
                  title: "Share What You Received",
                  desc: "Share the impact of the word and ministry on your platforms. Encourage friends who were unable to join live to watch the complete recorded replay.",
                },
                {
                  title: "Submit Your Testimony Immediately",
                  desc: "Testimonies enforce the victory and ignite faith in others. Write or record your testimony and send it through official ministry communication channels.",
                },
                {
                  title: "Distribute the Full Replay",
                  desc: "Many across different global time zones will experience their breakthrough via the replay. Keep circulating the official YouTube link over the following days.",
                },
                {
                  title: "Personal Follow-Up with Guests",
                  desc: "Call the friends and family who joined your watch party. Ask what touched them, pray with them, and answer any spiritual questions they might have.",
                },
                {
                  title: "Continue Sharing Approved Content",
                  desc: "As official ministry channels publish highlight reels, declaration soundbites, and sermons, continually engage with and share them across your channels.",
                },
                {
                  title: "Turn Encounters into Ongoing Discipleship",
                  desc: "The goal is long-term spiritual establishment. Introduce first-timers to weekly services, OneSound Bible Institute classes, and ministry resources.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: "26px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Collective Responsibility */}
        <section id="responsibility" className="section-wrapper">
          <div className="section-container" style={{ maxWidth: "860px" }}>
            <div
              className="glass-card"
              style={{
                padding: "48px 36px",
                textAlign: "center",
                border: "1px solid rgba(245, 158, 11, 0.35)",
                background: "radial-gradient(ellipse at 50% 0%, rgba(245, 158, 11, 0.12) 0%, rgba(10, 15, 30, 0.95) 80%)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(245, 158, 11, 0.1)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 14px",
                  borderRadius: "9999px",
                  background: "rgba(245, 158, 11, 0.15)",
                  color: "var(--gold-light)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                The Apostolic Charge
              </div>

              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "20px" }}>
                Our Collective Responsibility
              </h2>

              <p style={{ fontSize: "1.05rem", color: "#d1d5db", lineHeight: 1.8, marginBottom: "24px" }}>
                NDR 13 gives every member an opportunity to contribute directly to the kingdom reach and spiritual impact of the meeting. It allows us to <strong>multiply the gathering rather than simply replace a physical meeting</strong>. Instead of one location, there can be thousands of home altars. Instead of one audience, networks across nations can be activated.
              </p>

              <blockquote
                style={{
                  borderLeft: "3px solid #f59e0b",
                  background: "rgba(255, 255, 255, 0.03)",
                  padding: "16px 24px",
                  margin: "24px 0",
                  textAlign: "left",
                  fontSize: "1.02rem",
                  color: "#fef3c7",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                }}
              >
                &ldquo;Every member has a role in extending the reach of NDR 13. Every home can become a gathering point. Every invitation can bring someone new into the meeting. Every share can extend the reach, every post can create awareness, and every testimony can keep the encounter alive.&rdquo;
              </blockquote>

              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--gold-light)" }}>
                NDR 13 may be virtual, but our participation must be intentional.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Interactive Host Checklist */}
        <section id="checklist" className="section-wrapper" style={{ backgroundColor: "rgba(10, 15, 30, 0.4)" }}>
          <div className="section-container" style={{ maxWidth: "800px" }}>
            <div className="section-header">
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: "rgba(245, 158, 11, 0.1)",
                  color: "var(--gold-light)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Interactive Readiness
              </div>
              <h2 className="section-title">
                Watch Party <span className="gold-gradient-text">Readiness Checklist</span>
              </h2>
              <p className="section-subtitle">
                Check off each preparation step as you organize your home or group sanctuary.
              </p>
            </div>

            {/* Checklist Card */}
            <div
              className="glass-card"
              style={{
                padding: "36px",
                border: "1px solid rgba(245, 158, 11, 0.3)",
              }}
            >
              {/* Progress Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Your Preparation Progress
                  </div>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff" }}>
                    {completedCount} of {totalCount} Items Ready ({progressPercent}%)
                  </div>
                </div>
                <div
                  style={{
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    background: completedCount === totalCount ? "rgba(16, 185, 129, 0.2)" : "rgba(245, 158, 11, 0.15)",
                    color: completedCount === totalCount ? "#34d399" : "#fbbf24",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  }}
                >
                  {completedCount === totalCount ? "100% Prepared!" : "In Preparation"}
                </div>
              </div>

              {/* Progress Bar */}
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.1)",
                  overflow: "hidden",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    width: `${progressPercent}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>

              {/* Checkbox Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { id: "item1", text: "Fast and set aside dedicated personal prayer time prior to Friday." },
                  { id: "item2", text: "Personally invite 5 to 10 friends, family members, or colleagues via direct call or message." },
                  { id: "item3", text: "Prepare and clean the living room or watch-party venue with comfortable seating." },
                  { id: "item4", text: "Test your TV screen or projector with YouTube to ensure clear video & sound." },
                  { id: "item5", text: "Share the official YouTube livestream link on your WhatsApp status & social media." },
                  { id: "item6", text: "Have Bibles, notebooks, prayer targets, and communion ready before 11:00 PM." },
                  { id: "item7", text: "Download and post the official NDR 13 flyer with the hashtag #NightofDivineReversal13." },
                  { id: "item8", text: "Commit to active engagement: commenting 'Amen', sharing during the service, and taking group photos." },
                ].map((task) => (
                  <label
                    key={task.id}
                    onClick={() => toggleCheck(task.id)}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                      padding: "14px 18px",
                      borderRadius: "10px",
                      background: checklist[task.id] ? "rgba(245, 158, 11, 0.08)" : "rgba(255, 255, 255, 0.03)",
                      border: checklist[task.id] ? "1px solid rgba(245, 158, 11, 0.4)" : "1px solid rgba(255, 255, 255, 0.06)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={checklist[task.id]}
                      onChange={() => {}} // handled by parent label click
                      style={{
                        marginTop: "3px",
                        width: "18px",
                        height: "18px",
                        accentColor: "var(--gold-primary)",
                        cursor: "pointer",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.92rem",
                        color: checklist[task.id] ? "#ffffff" : "var(--text-secondary)",
                        textDecoration: checklist[task.id] ? "none" : "none",
                        fontWeight: checklist[task.id] ? 600 : 400,
                        lineHeight: 1.5,
                      }}
                    >
                      {task.text}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: One-Click Invitation Copy Kit */}
        <section className="section-wrapper">
          <div className="section-container" style={{ maxWidth: "800px" }}>
            <div
              className="glass-card"
              style={{
                padding: "36px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "16px" }}>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                    Copy-and-Share Invitation Template
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    Ready-to-use message for WhatsApp groups, direct messages, and SMS.
                  </p>
                </div>
                <button
                  onClick={copyShareText}
                  className="btn-primary"
                  style={{ padding: "10px 18px", fontSize: "0.85rem", cursor: "pointer" }}
                >
                  {copied ? "Copied to Clipboard!" : "Copy Template"}
                </button>
              </div>

              <div
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "8px",
                  padding: "18px",
                  fontSize: "0.88rem",
                  color: "#d1d5db",
                  fontFamily: "monospace",
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                }}
              >
                {shareText}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
