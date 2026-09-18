"use client";

import React, { useState } from "react";
import Image from "next/image";
import { NDR_DATA, VideoTestimony } from "@/data/ndrContent";

export default function Testimonies() {
  const [activeTab, setActiveTab] = useState<"text" | "video">("text");
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimony | null>(null);

  return (
    <section id="testimonies" className="section-wrapper" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">Supernatural Proofs</div>
          <h2 className="section-title">
            Testimonies from <span className="gold-gradient-text">NDR</span>
          </h2>
          <p className="section-subtitle">
            Read documented accounts of supernatural reversal and watch video encounters demonstrating the living power of God at The Ark of Light for All Nations.
          </p>
        </div>

        {/* Tab Toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "44px",
          }}
        >
          <button
            onClick={() => setActiveTab("text")}
            style={{
              padding: "12px 28px",
              borderRadius: "var(--radius-full)",
              fontSize: "0.9rem",
              fontWeight: 700,
              transition: "all 0.2s ease",
              backgroundColor: activeTab === "text" ? "var(--gold-primary)" : "rgba(255, 255, 255, 0.05)",
              color: activeTab === "text" ? "#060913" : "var(--text-secondary)",
              border: activeTab === "text" ? "1px solid var(--gold-primary)" : "1px solid var(--border-subtle)",
              boxShadow: activeTab === "text" ? "0 4px 20px rgba(245, 158, 11, 0.3)" : "none",
            }}
          >
            Personal Testimonies (Text)
          </button>

          <button
            onClick={() => setActiveTab("video")}
            style={{
              padding: "12px 28px",
              borderRadius: "var(--radius-full)",
              fontSize: "0.9rem",
              fontWeight: 700,
              transition: "all 0.2s ease",
              backgroundColor: activeTab === "video" ? "var(--gold-primary)" : "rgba(255, 255, 255, 0.05)",
              color: activeTab === "video" ? "#060913" : "var(--text-secondary)",
              border: activeTab === "video" ? "1px solid var(--gold-primary)" : "1px solid var(--border-subtle)",
              boxShadow: activeTab === "video" ? "0 4px 20px rgba(245, 158, 11, 0.3)" : "none",
            }}
          >
            Testimony Encounters (Video Embeds)
          </button>
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(245, 158, 11, 0.12)",
                        border: "1px solid rgba(245, 158, 11, 0.25)",
                        color: "var(--gold-light)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                      }}
                    >
                      {item.category}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }}>
                      {item.edition}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.2rem",
                      color: "#ffffff",
                      lineHeight: 1.4,
                      marginBottom: "14px",
                      fontWeight: 700,
                    }}
                  >
                    &ldquo;{item.title}&rdquo;
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

                  <div
                    style={{
                      padding: "14px",
                      borderRadius: "8px",
                      background: "rgba(255, 255, 255, 0.03)",
                      borderLeft: "3px solid var(--gold-light)",
                      fontStyle: "italic",
                      fontSize: "0.88rem",
                      color: "var(--text-gold)",
                      lineHeight: 1.5,
                      marginBottom: "20px",
                    }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </div>
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
            ))}
          </div>
        )}

        {/* Tab 2: Testimony Encounters (Video Embeds) */}
        {activeTab === "video" && (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "28px",
                marginBottom: "40px",
              }}
            >
              {NDR_DATA.videoTestimonies.map((video) => (
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
                      marginBottom: "16px",
                    }}
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(6, 9, 19, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background-color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "rgba(6, 9, 19, 0.25)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "rgba(6, 9, 19, 0.5)")
                      }
                    >
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          background: "var(--gold-gradient)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#060913",
                          fontSize: "1.4rem",
                          boxShadow: "0 0 25px rgba(245, 158, 11, 0.6)",
                          paddingLeft: "4px",
                        }}
                      >
                        ▶
                      </div>
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        background: "rgba(0, 0, 0, 0.8)",
                        color: "#ffffff",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      {video.duration}
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.15rem",
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
                      fontSize: "0.88rem",
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
                    <span style={{ fontSize: "0.8rem", color: "var(--gold-light)", fontWeight: 600 }}>
                      Speaker: {video.speaker}
                    </span>

                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="btn-outline-gold"
                      style={{ padding: "6px 14px", fontSize: "0.8rem" }}
                    >
                      Watch Video ▶
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Link to YouTube Channel */}
            <div style={{ textAlign: "center" }}>
              <a
                href={NDR_DATA.eventMeta.youtubeLive}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Explore More Testimonies on YouTube (@Arkoflightforallnations) ↗
              </a>
            </div>
          </div>
        )}

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="modal-overlay" onClick={() => setSelectedVideo(null)}>
            <div
              className="modal-content"
              style={{ maxWidth: "800px", padding: "24px" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video player"
              >
                ✕
              </button>

              <h3 style={{ fontSize: "1.25rem", color: "#ffffff", marginBottom: "16px", paddingRight: "40px" }}>
                {selectedVideo.title}
              </h3>

              {/* 16:9 Responsive YouTube Iframe */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "56.25%",
                  height: 0,
                  borderRadius: "10px",
                  overflow: "hidden",
                  marginBottom: "16px",
                  background: "#000000",
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
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

              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                {selectedVideo.summary}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
