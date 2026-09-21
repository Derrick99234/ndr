"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NDR_DATA } from "@/data/ndrContent";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About NDR", href: "/#about" },
    { name: "Convener", href: "/#convener" },
    { name: "What to Expect", href: "/#expect" },
    { name: "Schedule", href: "/#schedule" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Events", href: "/#events" },
    { name: "Testimonies", href: "/#testimonies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "var(--navbar-height)",
          zIndex: 1000,
          transition: "all 0.3s ease",
          backgroundColor: isScrolled ? "rgba(6, 9, 19, 0.92)" : "rgba(6, 9, 19, 0.6)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: isScrolled
            ? "1px solid rgba(245, 158, 11, 0.2)"
            : "1px solid rgba(255, 255, 255, 0.05)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-width)",
            width: "100%",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo & Brand */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
            aria-label="Night of Divine Reversal (NDR)"
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
                border: "1.5px solid rgba(245, 158, 11, 0.5)",
                boxShadow: "0 0 15px rgba(245, 158, 11, 0.35)",
                flexShrink: 0,
              }}
            >
              <Image
                src="/images/ndr-logo.jpg"
                alt="NDR Logo"
                fill
                sizes="44px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "24px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >

            {/* Register CTA */}
            <Link
              href="/register"
              className="btn-primary"
              style={{
                padding: "8px 20px",
                fontSize: "0.85rem",
                fontWeight: 700,
              }}
            >
              Register
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: "none",
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid var(--border-subtle)",
                color: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
              }}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "var(--navbar-height)",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(6, 9, 19, 0.98)",
            backdropFilter: "blur(20px)",
            zIndex: 999,
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            overflowY: "auto",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                padding: "10px 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ width: "100%", textAlign: "center" }}
            >
              Register to Attend
            </Link>
            <a
              href={NDR_DATA.eventMeta.youtubeLive}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: "100%", textAlign: "center" }}
            >
              Watch Live on YouTube
            </a>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 1023px) {
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
