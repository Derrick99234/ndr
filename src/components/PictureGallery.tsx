"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { NDR_DATA } from "@/data/ndrContent";

const PREVIEW_COUNT = 8;

export default function PictureGallery() {
  const images = NDR_DATA.gallery;

  const ndr11Images = useMemo(() => images.filter((img) => img.edition === "NDR 11"), [images]);
  const ndr12Images = useMemo(() => images.filter((img) => img.edition === "NDR 12"), [images]);

  const [activeLightbox, setActiveLightbox] = useState<{
    list: "NDR 11" | "NDR 12";
    index: number;
  } | null>(null);

  const [mounted, setMounted] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [slideWidth, setSlideWidth] = useState<number>(760);

  useEffect(() => {
    setMounted(true);
    const updateDimensions = () => {
      const w = window.innerWidth;
      const mobile = w <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setSlideWidth(w);
      } else {
        const target = Math.min(Math.max(w * 0.74, 280), 780);
        setSlideWidth(target);
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const slideGap = isMobile ? 0 : 24;
  const D = slideWidth + slideGap;

  // Drag & Carousel Animation State
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [trackOffset, setTrackOffset] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const isPointerDown = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const currentDragOffsetRef = useRef<number>(0);

  const slideNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTrackOffset(-D);
    setDragOffset(0);

    setTimeout(() => {
      setActiveLightbox((prev) => {
        if (!prev) return null;
        const list = prev.list === "NDR 11" ? ndr11Images : ndr12Images;
        const nextIdx = (prev.index + 1) % list.length;
        return { list: prev.list, index: nextIdx };
      });
      setTrackOffset(0);
      setIsAnimating(false);
    }, 320);
  }, [D, isAnimating, ndr11Images, ndr12Images]);

  const slidePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTrackOffset(D);
    setDragOffset(0);

    setTimeout(() => {
      setActiveLightbox((prev) => {
        if (!prev) return null;
        const list = prev.list === "NDR 11" ? ndr11Images : ndr12Images;
        const nextIdx = (prev.index - 1 + list.length) % list.length;
        return { list: prev.list, index: nextIdx };
      });
      setTrackOffset(0);
      setIsAnimating(false);
    }, 320);
  }, [D, isAnimating, ndr11Images, ndr12Images]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (activeLightbox !== null) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setActiveLightbox(null);
        if (e.key === "ArrowLeft") slidePrev();
        if (e.key === "ArrowRight") slideNext();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [activeLightbox, slidePrev, slideNext]);

  // Pointer Events (Unified touch & mouse dragging with capture)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isAnimating) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    isPointerDown.current = true;
    startXRef.current = e.clientX;
    currentDragOffsetRef.current = 0;
    setDragOffset(0);
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown.current || isAnimating) return;
    const diff = e.clientX - startXRef.current;
    currentDragOffsetRef.current = diff;
    setDragOffset(diff);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    const diff = currentDragOffsetRef.current;
    if (diff < -45) {
      slideNext();
    } else if (diff > 45) {
      slidePrev();
    } else {
      // Spring back if dragged less than threshold
      setIsAnimating(true);
      setDragOffset(0);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  };

  const activeList = activeLightbox?.list === "NDR 11" ? ndr11Images : ndr12Images;
  const N = activeList.length;
  const currIdx = activeLightbox ? activeLightbox.index : 0;
  const prev1Idx = N > 0 ? (currIdx - 1 + N) % N : 0;
  const prev2Idx = N > 0 ? (currIdx - 2 + N) % N : 0;
  const next1Idx = N > 0 ? (currIdx + 1) % N : 0;
  const next2Idx = N > 0 ? (currIdx + 2) % N : 0;

  const slides = N > 0 ? [
    { key: "p2", img: activeList[prev2Idx], offset: -2 * D, scale: isMobile ? 1 : 0.74, opacity: isMobile ? 0 : 0.1, zIndex: 1, isClickable: false },
    { key: "p1", img: activeList[prev1Idx], offset: -1 * D, scale: isMobile ? 1 : 0.84, opacity: isMobile ? 1 : 0.38, zIndex: 3, isClickable: true, onClick: slidePrev },
    { key: "curr", img: activeList[currIdx], offset: 0, scale: 1, opacity: 1, zIndex: 10, isClickable: false },
    { key: "n1", img: activeList[next1Idx], offset: 1 * D, scale: isMobile ? 1 : 0.84, opacity: isMobile ? 1 : 0.38, zIndex: 3, isClickable: true, onClick: slideNext },
    { key: "n2", img: activeList[next2Idx], offset: 2 * D, scale: isMobile ? 1 : 0.74, opacity: isMobile ? 0 : 0.1, zIndex: 1, isClickable: false },
  ] : [];

  const renderGrid = (list: typeof ndr11Images, editionName: "NDR 11" | "NDR 12") => {
    const previewImages = list.slice(0, PREVIEW_COUNT);
    const remainingCount = list.length - PREVIEW_COUNT;

    return (
      <div className="gallery-preview-grid">
        {previewImages.map((img, index) => {
          const isLast = index === PREVIEW_COUNT - 1 && remainingCount > 0;

          return (
            <div
              key={img.id}
              onClick={() => {
                setActiveLightbox({ list: editionName, index });
                setDragOffset(0);
                setTrackOffset(0);
              }}
              className="glass-card gallery-preview-card"
              style={{
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                borderRadius: "var(--radius-md)",
                transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.4)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "#070b14",
                }}
              >
                <Image
                  src={img.src}
                  alt={`Night of Divine Reversal ${editionName} Photo`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    filter: isLast ? "brightness(0.38)" : "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />

                {/* Remaining Images Overlay on the 8th (Last Preview) Image: Gray text, no bg */}
                {isLast && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "transparent",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      zIndex: 2,
                      padding: "8px",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                        fontWeight: 800,
                        color: "#9ca3af",
                        lineHeight: 1.1,
                        textShadow: "0 2px 14px rgba(0, 0, 0, 0.95), 0 0 4px rgba(0, 0, 0, 0.9)",
                      }}
                    >
                      +{remainingCount}
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(0.68rem, 2vw, 0.82rem)",
                        fontWeight: 700,
                        color: "#9ca3af",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginTop: "4px",
                        textShadow: "0 2px 10px rgba(0, 0, 0, 0.95)",
                      }}
                    >
                      View All Photos
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="gallery" className="section-wrapper" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: "50px" }}>
          <h2 className="section-title">
            Picture <span className="gold-gradient-text">Gallery</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into the glory, worship atmosphere, and congregation at The Ark of Light for All Nations.
          </p>
        </div>

        {/* SECTION 1: NDR 11 */}
        <div style={{ marginBottom: "70px" }}>
          <div
            style={{
              marginBottom: "26px",
              paddingBottom: "14px",
              borderBottom: "1px solid rgba(245, 158, 11, 0.25)",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1.5rem, 3.2vw, 2.1rem)",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "0.02em",
                margin: 0,
              }}
            >
              NDR <span className="gold-gradient-text">11</span>
            </h3>
          </div>

          {/* NDR 11 Grid (8 previews, 8th has overlay) */}
          {renderGrid(ndr11Images, "NDR 11")}
        </div>

        {/* SECTION 2: NDR 12 */}
        <div>
          <div
            style={{
              marginBottom: "26px",
              paddingBottom: "14px",
              borderBottom: "1px solid rgba(245, 158, 11, 0.25)",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1.5rem, 3.2vw, 2.1rem)",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "0.02em",
                margin: 0,
              }}
            >
              NDR <span className="gold-gradient-text">12</span>
            </h3>
          </div>

          {/* NDR 12 Grid (8 previews, 8th has overlay) */}
          {renderGrid(ndr12Images, "NDR 12")}
        </div>

        {/* Smooth 5-Slide Continuous Drag Lightbox Modal */}
        {mounted && activeLightbox !== null && N > 0 && createPortal(
          <div
            className="gallery-lightbox-overlay"
            onClick={() => setActiveLightbox(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100dvh",
              backgroundColor: "rgba(3, 7, 18, 0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              zIndex: 999999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: isMobile ? "12px 0 0 0" : "18px 10px",
              overflow: "hidden",
              userSelect: "none",
            }}
          >
            {/* Top Toolbar: Counter (clean gray text, no bg) + Close button */}
            <div
              className="gallery-lightbox-toolbar"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "1100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: isMobile ? "0 16px" : "0 20px",
                zIndex: 30,
              }}
            >
              {/* Image Counter: Gray text, no background */}
              <div
                className="gallery-lightbox-counter"
                style={{
                  fontSize: "0.95rem",
                  color: "#9ca3af",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  background: "transparent",
                  backgroundColor: "transparent",
                  border: "none",
                  padding: 0,
                }}
              >
                {currIdx + 1} of {N}
              </div>

              {/* Close Button */}
              <button
                type="button"
                className="modal-close-btn"
                style={{ position: "static", transform: "none" }}
                onClick={() => setActiveLightbox(null)}
                aria-label="Close image lightbox"
              >
                ✕
              </button>
            </div>

            {/* Draggable Smooth Carousel Area */}
            <div
              className="gallery-lightbox-carousel"
              onClick={(e) => e.stopPropagation()}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: isMobile ? "100vw" : "1280px",
                height: isMobile ? "calc(100dvh - 80px)" : "calc(100vh - 120px)",
                maxHeight: isMobile ? "none" : "760px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: isDragging ? "grabbing" : "grab",
                overflow: "hidden",
                touchAction: "pan-y",
              }}
            >
              {/* Left Arrow Button (Hidden on Mobile) */}
              {!isMobile && (
                <button
                  type="button"
                  className="gallery-lightbox-arrow gallery-lightbox-arrow-left"
                  onClick={(e) => {
                    e.stopPropagation();
                    slidePrev();
                  }}
                  aria-label="Previous photo"
                  style={{
                    position: "absolute",
                    left: "clamp(8px, 2.5vw, 24px)",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 25,
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(6, 9, 19, 0.8)",
                    border: "1px solid rgba(245, 158, 11, 0.4)",
                    color: "#ffffff",
                    fontSize: "1.7rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 6px 25px rgba(0, 0, 0, 0.8)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--gold-primary)";
                    e.currentTarget.style.color = "#060913";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(6, 9, 19, 0.8)";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                >
                  ‹
                </button>
              )}

              {/* Physical Sliding Track: All slides move together smoothly */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `translateX(${trackOffset + dragOffset}px)`,
                  transition: isAnimating ? "transform 0.32s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
                }}
              >
                {slides.map((s) => (
                  <div
                    key={s.key}
                    className={`gallery-lightbox-slide ${s.key === "curr" ? "active-slide" : "side-slide"}`}
                    onClick={(e) => {
                      if (s.isClickable && s.onClick && Math.abs(currentDragOffsetRef.current) < 10) {
                        e.stopPropagation();
                        s.onClick();
                      }
                    }}
                    style={{
                      position: "absolute",
                      left: `calc(50% + ${s.offset}px)`,
                      top: "50%",
                      transform: `translate(-50%, -50%) scale(${s.scale})`,
                      width: isMobile ? "100vw" : `${slideWidth}px`,
                      height: isMobile ? "calc(100dvh - 80px)" : "min(72vh, 640px)",
                      borderRadius: isMobile ? 0 : (s.key === "curr" ? "18px" : "14px"),
                      overflow: "hidden",
                      opacity: s.opacity,
                      cursor: s.isClickable ? "pointer" : "default",
                      zIndex: s.zIndex,
                      boxShadow: isMobile ? "none" : (s.key === "curr" ? "0 30px 100px rgba(0, 0, 0, 0.95), 0 0 50px rgba(245, 158, 11, 0.22)" : "0 20px 60px rgba(0, 0, 0, 0.85)"),
                      border: isMobile ? "none" : (s.key === "curr" ? "1px solid rgba(245, 158, 11, 0.45)" : "1px solid rgba(255, 255, 255, 0.12)"),
                      backgroundColor: isMobile ? "transparent" : "#070b14",
                      transition: isAnimating ? "transform 0.32s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.32s ease" : "none",
                    }}
                  >
                    <Image
                      src={s.img.src}
                      alt="Night of Divine Reversal photo"
                      fill
                      priority={s.key === "curr"}
                      sizes={isMobile ? "100vw" : "(max-width: 768px) 85vw, 780px"}
                      draggable={false}
                      style={{ objectFit: "contain", pointerEvents: "none" }}
                    />
                  </div>
                ))}
              </div>

              {/* Right Arrow Button (Hidden on Mobile) */}
              {!isMobile && (
                <button
                  type="button"
                  className="gallery-lightbox-arrow gallery-lightbox-arrow-right"
                  onClick={(e) => {
                    e.stopPropagation();
                    slideNext();
                  }}
                  aria-label="Next photo"
                  style={{
                    position: "absolute",
                    right: "clamp(8px, 2.5vw, 24px)",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 25,
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(6, 9, 19, 0.8)",
                    border: "1px solid rgba(245, 158, 11, 0.4)",
                    color: "#ffffff",
                    fontSize: "1.7rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 6px 25px rgba(0, 0, 0, 0.8)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--gold-primary)";
                    e.currentTarget.style.color = "#060913";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(6, 9, 19, 0.8)";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                >
                  ›
                </button>
              )}
            </div>

            {/* Bottom spacer for clean centering */}
            <div style={{ height: isMobile ? "0px" : "14px" }} />
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}
