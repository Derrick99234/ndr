"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GuidePage() {
  const [copied, setCopied] = useState(false);

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
                  <span className="gold-gradient-text">Members Participation Guide</span>
                </h1>

                <div
                  style={{
                    fontSize: "1.02rem",
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                    marginBottom: "28px",
                    maxWidth: "600px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <p>
                    The Night of Divine Reversal (NDR) 13 is set to be unique from previous editions. Instead of gathering everyone physically at the Ark of Light, this edition will take place mainly online, with the meeting broadcast live on all official ministry platforms. Members will therefore be able to participate from their homes, fellowships and different locations.
                  </p>
                  <p>
                    This means that people do not have to travel to the Ark of Light to be part of the meeting. Families can watch together at home, friends can organise watch parties, fellowships can gather, and members can invite people from their families, workplaces, communities and personal networks to join the meeting online. People who have never attended an NDR physically can also participate simply by joining the livestream.
                  </p>
                  <p>
                    The virtual format also means that one meeting can happen in many places at the same time. Instead of everyone being in one location, there can be many homes and gathering points connected to the same meeting.
                  </p>
                </div>

                {/* Event Schedule Quick Information */}
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
              { id: "why-virtual", label: "Why Virtual?" },
              { id: "pre-meeting", label: "Pre-Meeting Guidelines" },
              { id: "during-meeting", label: "During the Meeting" },
              { id: "post-meeting", label: "Post-Meeting Activities" },
              { id: "responsibility", label: "Our Collective Responsibility" },
              { id: "checklist", label: "Readiness Checklist" },
            ].map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                style={{
                  fontSize: "0.82rem",
                  padding: "6px 14px",
                  borderRadius: "6px",
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

        {/* Section: WHY VIRTUAL? (7 Exact Word-for-Word Points) */}
        <section id="why-virtual" className="section-wrapper">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">
                WHY <span className="gold-gradient-text">VIRTUAL?</span>
              </h2>
              <p className="section-subtitle">
                NDR 13 is being held virtually for the following reasons:
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
                  number: "1",
                  title: "Limitation of Space",
                  paragraphs: [
                    "During NDR 12, the venue became overcrowded for a night meeting. The virtual format makes it possible to accommodate many more people, as there is no physical limit to the number of people who can participate. It also reduces the risk associated with late-night movement, as people do not have to travel to and from the meeting at night.",
                  ],
                },
                {
                  number: "2",
                  title: "Easier Participation",
                  paragraphs: [
                    "People can join from wherever they are. They do not need to travel or make arrangements to attend physically.",
                  ],
                },
                {
                  number: "3",
                  title: "Family/Group Viewing",
                  paragraphs: [
                    "Families can watch together at home. Friends, fellowships and other groups can organise watch parties in their own locations.",
                  ],
                },
                {
                  number: "4",
                  title: "Increased Viewership",
                  paragraphs: [
                    "The livestream can be shared with many people before and during the meeting. People who have never attended NDR physically can also join the livestream. People who join NDR 13 for the first time can also be introduced to the ministry's official platforms, resources and future meetings, creating an opportunity for them to remain connected beyond NDR 13.",
                  ],
                },
                {
                  number: "5",
                  title: "Increased Online Impact",
                  paragraphs: [
                    "Members can like, comment, share and post about the meeting across their social media platforms.",
                    "This helps more people see and discover NDR 13 online.",
                  ],
                },
                {
                  number: "6",
                  title: "Meaningful Involvement",
                  paragraphs: [
                    "Every member can invite people from their personal network.",
                    "Family members, friends, colleagues, church members and social media followers can all be invited to participate.",
                  ],
                },
                {
                  number: "7",
                  title: "Instant Clipping",
                  paragraphs: [
                    "Watching from home allows you to participate in active sharing of the link, prayers, testimonies, declarations and other important moments while the meeting is still ongoing.",
                    "The replay, testimonies, clips and declarations can continue to be shared after the meeting. People who missed the live broadcast can then watch and participate.",
                  ],
                },
              ].map((item) => (
                <div
                  key={item.number}
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
                    <div style={{ marginBottom: "16px" }}>
                      <span
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 900,
                          color: "var(--gold-light)",
                          fontFamily: "monospace",
                        }}
                      >
                        {item.number}.
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
                      {item.title}
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {item.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note banner under Why Virtual */}
            <div
              style={{
                marginTop: "32px",
                padding: "20px 24px",
                background: "rgba(245, 158, 11, 0.08)",
                border: "1px solid rgba(245, 158, 11, 0.25)",
                borderRadius: "12px",
                textAlign: "center",
                color: "var(--gold-light)",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              The virtual format allows NDR 13 to be experienced in many homes, communities, cities and nations at the same time.
            </div>
          </div>
        </section>

        {/* Section: PRE-MEETING GUIDELINES (10 Exact Word-for-Word Steps) */}
        <section id="pre-meeting" className="section-wrapper" style={{ backgroundColor: "rgba(10, 15, 30, 0.4)" }}>
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">
                PRE-MEETING <span className="gold-gradient-text">GUIDELINES</span>
              </h2>
              <p className="section-subtitle">
                As you prepare for NDR 13, here are some pre-meeting guidelines:
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
                  number: "1",
                  title: "Prepare for the Encounter",
                  paragraphs: [
                    "Begin by preparing yourself intentionally for NDR 13. Set the time apart to pray and fast if possible. Although you will be joining virtually, approach the meeting with the same expectation and seriousness you would have if you were physically present at the Ark of Light.",
                  ],
                },
                {
                  number: "2",
                  title: "Do Not Watch Alone",
                  paragraphs: [
                    "Think about the people you can bring into the experience. Invite family members, friends, neighbours, colleagues, fellowship members and loved ones to join you. You can gather people in your home, connect with a small group or organise a simple gathering. The aim is to turn individual viewers into small gatherings and allow the virtual meeting to multiply into homes and communities.",
                  ],
                },
                {
                  number: "3",
                  title: "Host an NDR Watch Party",
                  paragraphs: [
                    "You can also intentionally organise NDR 13 watch parties. Your home, fellowship space or another suitable location can become a gathering point where people come together to participate in the meeting.",
                    "A watch party could be a family gathering, group of friends, fellowship, youth gathering or simply a few people experiencing the meeting together. It does not have to be large. What matters is that people are intentionally gathered and participating together.",
                    "Where appropriate, take photographs or short videos of your watch party and share them during or after the meeting. This helps demonstrate the gathering taking place across homes and communities.",
                  ],
                },
                {
                  number: "4",
                  title: "Personally Invite People",
                  paragraphs: [
                    "You can identify specific people who should be part of NDR 13 and reach out to them personally. Do not rely only on a general flyer or social media announcement. Send a direct message, make a call, share the meeting information and explain why you believe they should join.",
                    "Think beyond those who already know about NDR. Consider people who may need prayer, healing, restoration, direction, encouragement or divine intervention.",
                  ],
                },
                {
                  number: "5",
                  title: "Share the Official Links",
                  paragraphs: [
                    "You can make it easy for people to join by sharing the official YouTube and Facebook livestream links. Send the links directly to individuals, share them on your WhatsApp status and distribute them through appropriate groups and communities. Do not assume that seeing the flyer means someone already has the livestream link.",
                  ],
                },
                {
                  number: "6",
                  title: "Create Anticipation on Social Media",
                  paragraphs: [
                    "You can also create awareness before the meeting by sharing the official NDR 13 flyer, countdowns, promotional materials and other approved content on your WhatsApp status, Facebook, Instagram, X and other active platforms.",
                    "Use your personal platforms to let your followers and contacts know that NDR 13 is coming and invite them to participate.",
                  ],
                },
                {
                  number: "7",
                  title: "Like, Comment on and Share Official Posts",
                  paragraphs: [
                    "As the ministry releases posts, declarations, testimonies, clips and other content around NDR 13, members should actively engage with them by liking, commenting and sharing the official posts across their platforms.",
                  ],
                },
                {
                  number: "8",
                  title: "Use the Official Hashtag #NightofDivineReversal13",
                  paragraphs: [
                    "Whenever you post about NDR 13, use the official campaign hashtag and any other approved hashtags provided for the meeting.",
                    "Consistent use of the hashtag helps connect individual posts to the wider NDR 13 conversation and makes related content easier to discover.",
                  ],
                },
                {
                  number: "9",
                  title: "Mobilise Your Personal Network",
                  paragraphs: [
                    "You have a network of people you can reach, including family groups, friends, colleagues, church contacts, prayer groups, professional networks and social media followers.",
                    "You can activate these networks intentionally so that the reach of NDR 13 extends beyond the official ministry platforms.",
                  ],
                },
                {
                  number: "10",
                  title: "Refresh, Dress Up and Prepare Your Space",
                  paragraphs: [
                    "Refresh yourself, dress appropriately and prepare your space before the meeting begins. Have your Bible, notebook and prayer points ready, minimise distractions and create an atmosphere that allows you to participate fully.",
                    "If you are hosting a watch party, ensure the space is clean, welcoming and properly arranged for everyone to participate comfortably.",
                  ],
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="glass-card"
                  style={{
                    padding: "26px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderTop: "3px solid var(--gold-primary)",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--gold-light)", textTransform: "uppercase", marginBottom: "8px" }}>
                    Guideline {item.number}
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
                    {item.number}. {item.title}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {item.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: DURING THE MEETING PARTICIPATION (6 Exact Word-for-Word Points) */}
        <section id="during-meeting" className="section-wrapper">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">
                DURING THE MEETING <span className="gold-gradient-text">PARTICIPATION</span>
              </h2>
              <p className="section-subtitle">
                As the meeting progresses, here are some tips to help you maximise NDR 13:
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
                  number: "1",
                  title: "Be Fully Present",
                  paragraphs: [
                    "When NDR 13 begins, join early and remain engaged throughout the meeting. Do not allow the fact that you are watching from home to make you passive. Pray along, worship, receive the Word and respond to the declarations.",
                    "Treat your space as a place of encounter and participate as though you are physically present.",
                  ],
                },
                {
                  number: "2",
                  title: "Engage on YouTube and Facebook",
                  paragraphs: [
                    "Actively engage in the comment section throughout the meeting. Respond to prayers and declarations, celebrate testimonies, share what is ministering to you and encourage others participating online.",
                    "Active engagement helps create a stronger sense of community around the virtual gathering.",
                  ],
                },
                {
                  number: "3",
                  title: "Share the Livestream",
                  paragraphs: [
                    "Continue sharing the livestream as the meeting progresses. Share when the meeting begins and again when a powerful prayer, testimony, worship moment or Word is taking place.",
                    "Send the link directly to someone who needs that particular moment, share it on your WhatsApp status or post it on your social media platforms.",
                  ],
                },
                {
                  number: "4",
                  title: "Post From Your Own Platform",
                  paragraphs: [
                    "Do not rely only on reposting official content. Share your personal participation in NDR 13 through a watch-party picture, a declaration that impacted you, a brief reflection or an invitation to join the ongoing livestream. Use the official hashtag and tag the appropriate ministry pages where applicable.",
                  ],
                },
                {
                  number: "5",
                  title: "Keep Inviting People Into the Meeting",
                  paragraphs: [
                    "As the meeting progresses, continue looking for opportunities to bring people in. If a prayer speaks to someone's situation, send them the link. If a testimony reminds you of someone, invite them. If a powerful Word is being preached, share it with someone who needs to hear it.",
                  ],
                },
                {
                  number: "6",
                  title: "Make Your Watch Party Visible",
                  paragraphs: [
                    "If you are hosting a watch party, capture appropriate photographs or short videos of the gathering and share them on your social media platforms.",
                    "This helps others see that NDR 13 is being experienced across different homes and communities.",
                  ],
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="glass-card"
                  style={{
                    padding: "28px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(245, 158, 11, 0.15)", color: "#fbbf24", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.9rem", marginBottom: "14px" }}>
                    {item.number}
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", marginBottom: "10px" }}>
                    {item.number}. {item.title}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {item.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: POST-MEETING ACTIVITIES (6 Exact Word-for-Word Points) */}
        <section id="post-meeting" className="section-wrapper" style={{ backgroundColor: "rgba(10, 15, 30, 0.4)" }}>
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">
                POST-MEETING <span className="gold-gradient-text">ACTIVITIES</span>
              </h2>
              <p className="section-subtitle">
                You can also extend and expand the impact of the meeting in the following ways:
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
                  number: "1",
                  title: "Share What You Received",
                  paragraphs: [
                    "The conversation should not end when the livestream ends. Members are encouraged to share what impacted them during the meeting, whether it was a powerful Word, declaration, prayer, testimony or moment of worship.",
                    "Encourage people who could not join live to watch the replay.",
                  ],
                },
                {
                  number: "2",
                  title: "Share Your Testimony",
                  paragraphs: [
                    "If you experienced an answer to prayer, divine intervention or a significant encounter during NDR 13, share your testimony through the appropriate channels.",
                    "Testimonies help keep the message of the meeting alive and can encourage others.",
                  ],
                },
                {
                  number: "3",
                  title: "Share the Replay",
                  paragraphs: [
                    "Continue sharing the official replay with people who were unable to join live. Some people may only discover NDR 13 after the meeting, making the replay another opportunity to reach them.",
                  ],
                },
                {
                  number: "4",
                  title: "Follow Up With Those You Invited",
                  paragraphs: [
                    "Reach out to the people you personally invited and those who joined your watch party. Ask them what they received from the meeting and encourage them to remain connected.",
                    "For first-time participants, help them discover the official social media platforms, online services, resources and future meetings.",
                  ],
                },
                {
                  number: "5",
                  title: "Continue Sharing Approved Content",
                  paragraphs: [
                    "As clips, testimonies, declarations, photographs and highlights from NDR 13 are released, members should continue engaging with them. Like, comment, share and repost approved content while using the official hashtags.",
                  ],
                },
                {
                  number: "6",
                  title: "Turn One Encounter Into Continued Connection",
                  paragraphs: [
                    "The objective extends beyond generating views for one night. People who encounter NDR 13 should have an opportunity to remain connected to the ministry and continue receiving the Word, participating in services and engaging with future meetings.",
                  ],
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="glass-card"
                  style={{
                    padding: "26px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", marginBottom: "10px" }}>
                    {item.number}. {item.title}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {item.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: OUR COLLECTIVE RESPONSIBILITY */}
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
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "20px" }}>
                OUR COLLECTIVE RESPONSIBILITY
              </h2>

              <p style={{ fontSize: "1.05rem", color: "#d1d5db", lineHeight: 1.8, marginBottom: "20px" }}>
                NDR 13 gives every member an opportunity to contribute to the reach and impact of the meeting. It gives us an opportunity to multiply the gathering rather than simply replace a physical meeting. Instead of one location, there can be many homes and gathering points. Instead of one audience, personal networks across different cities and nations can be activated.
              </p>

              <blockquote
                style={{
                  borderLeft: "3px solid #f59e0b",
                  background: "rgba(255, 255, 255, 0.03)",
                  padding: "18px 24px",
                  margin: "24px 0",
                  textAlign: "left",
                  fontSize: "1.05rem",
                  color: "#fef3c7",
                  fontStyle: "italic",
                  lineHeight: 1.75,
                }}
              >
                &ldquo;Every member has a role in extending the reach of NDR 13. Every home can become a gathering point. Every invitation can bring someone new into the meeting. Every share can extend the reach, every post can create awareness, and every testimony can keep the encounter alive.&rdquo;
              </blockquote>

              <p style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--gold-light)", marginTop: "24px" }}>
                NDR 13 may be virtual, but our participation must be intentional.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Interactive Host Checklist */}
        <section id="checklist" className="section-wrapper" style={{ backgroundColor: "rgba(10, 15, 30, 0.4)" }}>
          <div className="section-container" style={{ maxWidth: "800px" }}>
            <div className="section-header">
              <h2 className="section-title">
                Watch Party <span className="gold-gradient-text">Readiness Checklist</span>
              </h2>
              <p className="section-subtitle">
                Interactive checklist based directly on the official preparation guidelines.
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
                    color: completedCount === totalCount ? "#34d399" : "#fbbf24",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                  }}
                >
                  {completedCount === totalCount ? "100% Prepared" : "In Preparation"}
                </div>
              </div>

              {/* Progress Bar */}
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  borderRadius: "4px",
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
                  { id: "item1", text: "Prepare intentionally: Set time apart to pray and fast prior to NDR 13." },
                  { id: "item2", text: "Do not watch alone: Invite family members, friends, neighbours, colleagues, and loved ones." },
                  { id: "item3", text: "Host an NDR Watch Party in your home, fellowship space, or suitable gathering point." },
                  { id: "item4", text: "Personally reach out and invite specific individuals who need prayer, healing, or turnaround." },
                  { id: "item5", text: "Share the official YouTube and Facebook livestream links directly and on WhatsApp status." },
                  { id: "item6", text: "Create anticipation on social media using the official NDR 13 flyer and countdowns." },
                  { id: "item7", text: "Refresh, dress appropriately, and prepare your space with your Bible, notebook, and prayer points." },
                  { id: "item8", text: "Engage actively during the live broadcast: pray along, worship, and comment on the stream." },
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
