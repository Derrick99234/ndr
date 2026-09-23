"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { NDR_DATA, VideoTestimony, TextTestimony } from "@/data/ndrContent";

export default function Testimonies() {
  const [activeTab, setActiveTab] = useState<"text" | "video">("text");
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimony | null>(null);
  const [selectedTextTestimony, setSelectedTextTestimony] = useState<TextTestimony | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedVideo || selectedTextTestimony) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo, selectedTextTestimony]);

  const filteredVideos = NDR_DATA.videoTestimonies;

  return (
    <section id="testimonies" className="section-wrapper" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Testimonies from <span className="gold-gradient-text">NDR</span>
          </h2>
          <p className="section-subtitle">
            Read documented accounts of supernatural reversal and watch video encounters demonstrating the living power of God at The Ark of Light for All Nations.
          </p>
        </div>

        {/* Tab Toggle - Classic Tab Bar (Obvious switchable tabs, not stacked buttons on mobile) */}
        <div className="testimonies-tab-wrapper">
          <div className="testimonies-tab-bar" role="tablist" aria-label="Testimony Format Switcher">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "text"}
              onClick={() => setActiveTab("text")}
              className={`testimonies-tab-btn ${activeTab === "text" ? "active" : ""}`}
            >
              <span className="tab-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </span>
              <span>Personal Testimonies</span>
              <span className="testimonies-tab-badge">Text</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "video"}
              onClick={() => setActiveTab("video")}
              className={`testimonies-tab-btn ${activeTab === "video" ? "active" : ""}`}
            >
              <span className="tab-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </span>
              <span>Video Encounters</span>
              <span className="testimonies-tab-badge">{NDR_DATA.videoTestimonies.length}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Personal Testimonies (Text) */}
        {activeTab === "text" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {NDR_DATA.textTestimonies.map((item) => (
              <div
                key={item.id}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "28px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      color: "#ffffff",
                      lineHeight: 1.45,
                      marginBottom: "14px",
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      marginBottom: "18px",
                    }}
                  >
                    {item.summary}
                  </p>
                </div>

                <div>
                  <div style={{ marginBottom: "16px" }}>
                    <button
                      type="button"
                      onClick={() => setSelectedTextTestimony(item)}
                      className="btn-outline-gold"
                      style={{
                        padding: "7px 18px",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      Read More →
                    </button>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      paddingTop: "14px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: "rgba(245, 158, 11, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--gold-light)",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                      }}
                    >
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#ffffff" }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Testimony Encounters (Video Embeds) */}
        {activeTab === "video" && (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
                marginBottom: "40px",
              }}
            >
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="glass-card"
                  style={{
                    padding: "16px",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Video Thumbnail & Play trigger */}
                  <div
                    onClick={() => setSelectedVideo(video)}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "220px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      cursor: "pointer",
                      marginBottom: "14px",
                      backgroundColor: "#060913",
                    }}
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(6, 9, 19, 0.45)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background-color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "rgba(6, 9, 19, 0.2)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "rgba(6, 9, 19, 0.45)")
                      }
                    >
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "50%",
                          background: "var(--gold-gradient)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#060913",
                          fontSize: "1.3rem",
                          boxShadow: "0 0 25px rgba(245, 158, 11, 0.6)",
                          paddingLeft: "3px",
                        }}
                      >
                        ▶
                      </div>
                    </div>

                    {/* Batch Tag on Thumbnail */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        background: "rgba(6, 9, 19, 0.85)",
                        border: "1px solid rgba(245, 158, 11, 0.4)",
                        color: "var(--gold-light)",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {video.batch}
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        background: "rgba(0, 0, 0, 0.85)",
                        color: "#ffffff",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                      }}
                    >
                      Shorts
                    </div>
                  </div>

                  {/* Category Pill */}
                  {video.category && (
                    <div style={{ marginBottom: "8px" }}>
                      <span
                        style={{
                          padding: "2px 8px",
                          borderRadius: "4px",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          backgroundColor: "rgba(245, 158, 11, 0.1)",
                          color: "var(--gold-light)",
                          border: "1px solid rgba(245, 158, 11, 0.2)",
                        }}
                      >
                        {video.category}
                      </span>
                    </div>
                  )}

                  <h3
                    style={{
                      fontSize: "1.08rem",
                      color: "#ffffff",
                      fontWeight: 700,
                      marginBottom: "8px",
                      lineHeight: 1.35,
                    }}
                  >
                    {video.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.86rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginBottom: "16px",
                      flex: 1,
                    }}
                  >
                    {video.summary}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "12px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <span style={{ fontSize: "0.76rem", color: "var(--text-muted)", fontWeight: 500 }}>
                      Prophet Isaiah Macwealth
                    </span>

                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="btn-outline-gold"
                      style={{ padding: "6px 14px", fontSize: "0.8rem", cursor: "pointer" }}
                    >
                      Watch Video ▶
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Link to YouTube Shorts Channel */}
            <div style={{ textAlign: "center" }}>
              <a
                href="https://www.youtube.com/@isaiahmacwealth/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Explore More Testimonies on YouTube (@isaiahmacwealth) ↗
              </a>
            </div>
          </div>
        )}

        {/* Video Player Modal (Portaled to document.body, zIndex 999999) */}
        {mounted && selectedVideo && createPortal(
          <div
            className="modal-overlay"
            onClick={() => setSelectedVideo(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              height: "100dvh",
              backgroundColor: "rgba(3, 7, 18, 0.9)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              zIndex: 999999, // On top of everything
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "max(24px, 4vh) 20px",
            }}
          >
            <div
              className="modal-content"
              style={{
                maxWidth: "460px",
                width: "92%",
                maxHeight: "min(88vh, 760px)",
                overflowY: "auto",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#0d1424",
                border: "1px solid rgba(245, 158, 11, 0.4)",
                boxShadow: "0 30px 100px rgba(0, 0, 0, 0.95), 0 0 45px rgba(245, 158, 11, 0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video player"
              >
                ✕
              </button>

              <div style={{ width: "100%", marginBottom: "12px", paddingRight: "36px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span
                    style={{
                      background: "rgba(245, 158, 11, 0.15)",
                      color: "var(--gold-light)",
                      border: "1px solid rgba(245, 158, 11, 0.3)",
                      fontSize: "0.72rem",
                      padding: "2px 8px",
                      borderRadius: "var(--radius-full)",
                      fontWeight: 700,
                    }}
                  >
                    {selectedVideo.batch}
                  </span>
                  {selectedVideo.category && (
                    <span
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      {selectedVideo.category}
                    </span>
                  )}
                </div>
                <h3 style={{ fontSize: "1.1rem", color: "#ffffff", fontWeight: 700, lineHeight: 1.35 }}>
                  {selectedVideo.title}
                </h3>
              </div>

              {/* Responsive 9:16 Vertical Video Frame */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "320px",
                  aspectRatio: "9/16",
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "14px",
                  background: "#000000",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.9)",
                  border: "1px solid rgba(245, 158, 11, 0.25)",
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.86rem",
                  lineHeight: 1.5,
                  textAlign: "center",
                  marginBottom: "14px",
                  width: "100%",
                }}
              >
                {selectedVideo.summary}
              </p>

              <a
                href={`https://www.youtube.com/shorts/${selectedVideo.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
                style={{
                  fontSize: "0.82rem",
                  padding: "8px 16px",
                  width: "100%",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                Watch Directly on YouTube Shorts ↗
              </a>
            </div>
          </div>,
          document.body
        )}

        {/* Full Text Testimony Popup Modal (Portaled directly to document.body with wider width: maxWidth 880px) */}
        {mounted && selectedTextTestimony && createPortal(
          <div
            className="modal-overlay"
            onClick={() => setSelectedTextTestimony(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              height: "100dvh",
              backgroundColor: "rgba(3, 7, 18, 0.9)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              zIndex: 999999, // Above navbar and all page content
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "max(32px, 5vh) 20px",
            }}
          >
            <div
              className="modal-content"
              style={{
                maxWidth: "880px", // Wider width as requested
                width: "100%",
                maxHeight: "min(86vh, 850px)",
                overflowY: "auto",
                padding: "36px",
                position: "relative",
                backgroundColor: "#0d1424",
                border: "1px solid rgba(245, 158, 11, 0.4)",
                boxShadow: "0 30px 100px rgba(0, 0, 0, 0.95), 0 0 45px rgba(245, 158, 11, 0.2)",
                borderRadius: "var(--radius-lg)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedTextTestimony(null)}
                aria-label="Close testimony modal"
              >
                ✕
              </button>

              <div style={{ marginBottom: "24px", paddingRight: "40px" }}>

                <h3
                  style={{
                    fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.35,
                    marginBottom: "10px",
                  }}
                >
                  {selectedTextTestimony.title}
                </h3>

                <div
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--gold-light)",
                    fontWeight: 700,
                  }}
                >
                  — {selectedTextTestimony.name} ({selectedTextTestimony.location})
                </div>
              </div>

              {/* Exact Testimony Text formatted with original paragraphs and line breaks */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingTop: "24px",
                }}
              >
                {selectedTextTestimony.fullText.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    style={{
                      fontSize: "0.98rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.85,
                      whiteSpace: "pre-line",
                      margin: 0,
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div
                style={{
                  marginTop: "28px",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedTextTestimony(null)}
                  className="btn-primary"
                  style={{ padding: "8px 24px", fontSize: "0.85rem" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}
