"use client";

import React, { useState } from "react";
import Image from "next/image";
import { NDR_DATA, GalleryImage } from "@/data/ndrContent";

export default function PictureGallery() {
  const [filter, setFilter] = useState<string>("all");
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    filter === "all"
      ? NDR_DATA.gallery
      : NDR_DATA.gallery.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="section-wrapper" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Picture <span className="gold-gradient-text">Gallery</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into the glory, worship atmosphere, sweet water ministrations, and congregation at The Ark of Light for All Nations.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          {[
            { id: "all", label: "All Photos" },
            { id: "sanctuary", label: "Ark of Light Sanctuary" },
            { id: "convener", label: "Prophet Isaiah Macwealth" },
            { id: "worship", label: "Praise & Worship" },
            { id: "prayer", label: "Sweet Water & Deliverance" },
          ].map((cat) => {
            const isSelected = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.825rem",
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                  backgroundColor: isSelected ? "var(--gold-primary)" : "rgba(255, 255, 255, 0.05)",
                  color: isSelected ? "#060913" : "var(--text-secondary)",
                  border: isSelected ? "1px solid var(--gold-primary)" : "1px solid var(--border-subtle)",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Images Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className="glass-card"
              style={{
                padding: "12px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "240px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              <div style={{ padding: "14px 8px 4px 8px" }}>
                <h3 style={{ fontSize: "1.05rem", color: "#ffffff", fontWeight: 700 }}>
                  {img.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    marginTop: "6px",
                    lineHeight: 1.4,
                  }}
                >
                  {img.caption}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "10px",
                    fontSize: "0.78rem",
                    color: "var(--gold-light)",
                    fontWeight: 600,
                  }}
                >
                  <span>Click to expand</span>
                  <span>↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div className="modal-overlay" onClick={() => setActiveImage(null)}>
            <div
              className="modal-content"
              style={{ maxWidth: "880px", padding: "20px" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setActiveImage(null)}
                aria-label="Close image lightbox"
              >
                ✕
              </button>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "460px",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  marginBottom: "20px",
                }}
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div style={{ padding: "0 8px 8px 8px" }}>
                <div
                  style={{
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    color: "var(--gold-light)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                  }}
                >
                  The Ark of Light for All Nations
                </div>
                <h3 style={{ fontSize: "1.35rem", color: "#ffffff", marginTop: "4px" }}>
                  {activeImage.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "8px" }}>
                  {activeImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
