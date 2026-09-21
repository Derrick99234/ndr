"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NDR_DATA } from "@/data/ndrContent";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(NDR_DATA.eventMeta.targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "calc(var(--navbar-height) + 40px)",
        paddingBottom: "80px",
        overflow: "hidden",
      }}
    >
      {/* Background Hero Image with ethereal dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/images/ndr-hero-live.jpg"
          alt="Night of Divine Reversal Sanctuary"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center 30%",
            opacity: 0.42,
            filter: "brightness(0.8) contrast(1.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(6, 9, 19, 0.75) 0%, rgba(6, 9, 19, 0.92) 75%, #060913 100%)",
          }}
        />
      </div>

      <div
        className="section-container"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "960px",
        }}
      >

        {/* Main Headings */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "20px",
            fontFamily: "var(--font-heading), sans-serif",
          }}
        >
          NIGHT OF <span className="gold-gradient-text">DIVINE REVERSAL</span>
        </h1>


        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-secondary)",
            maxWidth: "680px",
            margin: "0 auto 36px auto",
            lineHeight: 1.6,
          }}
        >
          A sacred monthly night of praise, prophecy, and the manifest power of God designed for supernatural turnaround. Broadcast virtually worldwide from The Ark of Light for All Nations.
        </p>

        {/* Live Countdown Timer Card */}
        <div
          style={{
            maxWidth: "620px",
            margin: "0 auto 40px auto",
            background: "rgba(15, 23, 42, 0.65)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(245, 158, 11, 0.25)",
            borderRadius: "var(--radius-md)",
            padding: "20px 24px",
            boxShadow: "0 15px 35px -10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(245, 158, 11, 0.1)",
          }}
        >
          <div
            style={{
              fontSize: "0.8rem",
              color: "var(--gold-light)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 700,
              marginBottom: "14px",
            }}
          >
            Countdown to NDR • {NDR_DATA.eventMeta.dateDisplay}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "12px",
            }}
          >
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((unit) => (
              <div
                key={unit.label}
                style={{
                  background: "rgba(6, 9, 19, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "10px",
                  padding: "12px 6px",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
                    fontWeight: 800,
                    color: "#ffffff",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "var(--text-muted)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    marginTop: "4px",
                  }}
                >
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Actions */}
        <div className="hero-actions-wrapper">
          <Link
            href="/register"
            className="btn-primary hero-actions-primary"
            style={{ padding: "16px 36px", fontSize: "1rem" }}
          >
            Register to Attend
          </Link>
          <div className="hero-actions-secondary-grid">
            <a href="#schedule" className="btn-secondary" style={{ padding: "16px 28px" }}>
              View Schedule
            </a>
            <a href="#testimonies" className="btn-outline-gold" style={{ padding: "16px 24px" }}>
              Testimonies
            </a>
          </div>
        </div>

        {/* Trust & Highlights Bar */}
        <div className="hero-highlights-strip">
          {[
            { title: "Sweet Water", detail: "Prophetic Ministration" },
            { title: "7 Days Class", detail: "Victory & Faith Prep" },
            { title: "Global Broadcast", detail: "YouTube & Facebook Live" },
          ].map((item, idx) => (
            <div key={idx} className="hero-highlight-col">
              <div style={{ fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)", fontWeight: 700, color: "#ffffff" }}>
                {item.title}
              </div>
              <div style={{ fontSize: "clamp(0.68rem, 2vw, 0.8rem)", color: "var(--text-muted)", marginTop: "2px" }}>
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
