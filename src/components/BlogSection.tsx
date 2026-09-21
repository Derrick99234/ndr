"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NDR_DATA, BlogPost } from "@/data/ndrContent";

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="section-wrapper" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">Prophetic Insights</div>
          <h2 className="section-title">
            The Word & <span className="gold-gradient-text">Blog</span>
          </h2>
          <p className="section-subtitle">
            Deep revelatory teachings by Prophet Isaiah Macwealth to condition your faith for divine reversal, sweet water encounters, and covenant remembrance.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {NDR_DATA.blogPosts.map((post) => (
            <div
              key={post.id}
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
                    marginBottom: "14px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--gold-light)",
                      background: "rgba(245, 158, 11, 0.12)",
                      padding: "4px 10px",
                      borderRadius: "var(--radius-full)",
                    }}
                  >
                    {post.scripture}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    {post.readTime}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    color: "#ffffff",
                    lineHeight: 1.4,
                    marginBottom: "12px",
                    fontWeight: 700,
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {post.excerpt}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  By {post.author}
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="btn-outline-gold"
                  style={{ padding: "6px 16px", fontSize: "0.825rem" }}
                >
                  Read Teaching →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Article Reading Modal */}
        {selectedPost && (
          <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
            <div
              className="modal-content"
              style={{ maxWidth: "760px", padding: "36px" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedPost(null)}
                aria-label="Close article modal"
              >
                ✕
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "var(--gold-light)",
                    background: "rgba(245, 158, 11, 0.15)",
                    padding: "4px 12px",
                    borderRadius: "var(--radius-full)",
                  }}
                >
                  Anchor Scripture: {selectedPost.scripture}
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  {selectedPost.date} • {selectedPost.readTime}
                </span>
              </div>

              <h2
                style={{
                  fontSize: "1.65rem",
                  color: "#ffffff",
                  lineHeight: 1.3,
                  marginBottom: "20px",
                  fontFamily: "var(--font-heading), sans-serif",
                }}
              >
                {selectedPost.title}
              </h2>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "24px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--gold-gradient)",
                    color: "#060913",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                  }}
                >
                  IM
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#ffffff" }}>
                    {selectedPost.author}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    Convener, Night of Divine Reversal
                  </div>
                </div>
              </div>

              {/* Article Content Paragraphs */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", color: "#e2e8f0", lineHeight: 1.8 }}>
                {selectedPost.content.map((p, idx) => (
                  <p key={idx} style={{ fontSize: "1rem" }}>
                    {p}
                  </p>
                ))}
              </div>

              <div
                style={{
                  marginTop: "32px",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <Link href="/register" onClick={() => setSelectedPost(null)} className="btn-primary" style={{ padding: "10px 24px" }}>
                  Register to Attend
                </Link>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="btn-secondary"
                  style={{ padding: "10px 24px" }}
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
