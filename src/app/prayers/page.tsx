"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PrayerItem {
  id: number;
  title: string;
  scripture: string;
  scriptureFullKJV: string;
  prayer: string;
  confession: string;
  declarationHighlight?: string;
}

const PRAYERS_DATA: PrayerItem[] = [
  {
    id: 1,
    title: "Prayer to Reverse Limitations",
    scripture: "Psalm 105:17, 19 (KJV)",
    scriptureFullKJV:
      "17 He sent a man before them, even Joseph, who was sold for a servant:\n19 Until the time that his word came: the word of the LORD tried him.",
    prayer:
      "Oh Lord God, El-Gibbowr, remember me and your promise this NDR14. Let every delay and conspiracy be shattered. Reverse every season that is not consistent with the set time and bring me into speedy manifestation in accordance to your word, in the Name of Jesus!",
    confession:
      "I declare that having been tried by the Word, I am not broken. My God, El-Gibbowr, is reversing my plight from Pit to Prime Minister, from problems and prisons, to promotions and plenty. This is my time, in the name of Jesus!",
  },
  {
    id: 2,
    title: "Prayer to Reverse Disqualification",
    scripture: "1 Samuel 16:7, 12 (KJV)",
    scriptureFullKJV:
      "7 But the LORD said unto Samuel, Look not on his countenance, or on the height of his stature; because I have refused him: for the LORD seeth not as man seeth; for man looketh on the outward appearance, but the LORD looketh on the heart.\n12 And he sent, and brought him in. Now he was ruddy, and withal of a beautiful countenance, and goodly to look to. And the LORD said, Arise, anoint him: for this is he.",
    prayer:
      "Oh God of reversal, thou art my God. I call upon you today to bypass every human protocol and locate me. Reverse every evil verdict of rejection and disqualification passed by my family, peers, institutions, or even my errors. Let your Word concerning me come forth and stand in the name of Jesus!",
    confession:
      "I declare that I am chosen of the Lord. I, therefore, veto every word of accusation against my destiny. I receive the Oil of Favour 4 upon my head as an Oil of distinction. I come out from the backside of the wilderness to my place of glory, in the name of Jesus!",
  },
  {
    id: 3,
    title: "Prayer to Reverse Hamanic Decree",
    scripture: "Esther 8:5; 9:1 (KJV)",
    scriptureFullKJV:
      "8:5 And said, If it please the king, and if I have found favour in his sight, and the thing seem right before the king, and I be pleasing in his eyes, let it be written to reverse the letters devised by Haman the son of Hammedatha the Agagite, which he wrote to destroy the Jews which are in all the king's provinces:\n9:1 Now in the twelfth month, that is, the month Adar, on the thirteenth day of the same, when the king's commandment and his decree drew near to be put in execution, in the day that the enemies of the Jews hoped to have power over them, (though it was turned to the contrary, that the Jews had rule over them that hated them;)",
    prayer:
      "Father in the name of Jesus, let every handwriting of ordinances, demonic spells, institutional laws, and spiritual sentences orchestrated to eliminate my progress and heritage be reversed by fire this NDR14. Let every gallow built for me become the destruction of its builders in the name of Jesus!",
    confession:
      "I decree that Jehovah El-Gibbowr has stepped into my Case. Every evil decree, verdicts and scripts are now flipped. Every pit dug for me now swallows its diggers in the name of Jesus!",
  },
  {
    id: 4,
    title: "Prayer to Reverse Lost Giftings, Mantles and Anointings",
    scripture: "Joel 2:25-26 (KJV)",
    scriptureFullKJV:
      "25 And I will restore to you the years that the locust hath eaten, the cankerworm, and the caterpiller, and the palmerworm, my great army which I sent among you.\n26 And ye shall eat in plenty, and be satisfied, and praise the name of the LORD your God, that hath dealt wondrously with you: and my people shall never be ashamed.",
    prayer:
      "Oh El-Gibbowr, God of restoration, remember me today and cause me to testify. Compress time for me, reversing consequences of past mistakes, wasted seasons and stolen opportunities. Grant me an overtaking speed this NDR14 and in this remaining part of 2026, in the name of Jesus!",
    confession:
      "I decree that my lost years are restored. I bounce back from every setback. I proclaim and establish over my life double honour for every dishonour and shame. I decree and declare that stagnation is broken and my life experiences divine acceleration now, in the name of Jesus!",
  },
  {
    id: 5,
    title: "Prayer to Reverse Wilderness Conditions & Red Sea Roadblocks",
    scripture: "Isaiah 43:16, 19 (KJV)",
    scriptureFullKJV:
      "16 Thus saith the LORD, which maketh a way in the sea, and a path in the mighty waters;\n19 Behold, I will do a new thing; now it shall spring forth; shall ye not know it? I will even make a way in the wilderness, and rivers in the desert.",
    prayer:
      "Oh God El-Gibbowr, perform your signature work in my life this NDR14. Make for me a way in the wilderness, rivers in the desert. Cause waters to come forth for me in the midst of aridity. Remember me your chosen. Remember I am formed for your glory. Therefore, give not your glory to another. Fight for me now and let your finger bring glory to your name in my life, speedily, in the name of Jesus!",
    confession:
      "I declare that the hand of the LORD is upon me. My plight has given birth to my purpose. I step into destiny. My way is open, my path is clear, my feet is anointed, I walk in distinction. My throne is elevated. My crown is set on my head. My glory cannot be hidden. Therefore, I decree upon my life, destiny, family, career, business,",
    declarationHighlight: "ARISE AND SHINE (X14) in the name of Jesus!",
  },
];

export default function PrayersPage() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [fontSize, setFontSize] = useState<"standard" | "large">("standard");

  const copySinglePrayer = (item: PrayerItem) => {
    const text = `*Prayer Point ${item.id}: ${item.title}*\nScripture: ${item.scripture}\n${item.scriptureFullKJV}\n\nPrayer:\n${item.prayer}\n\nConfession:\n${item.confession}${item.declarationHighlight ? `\n\n${item.declarationHighlight}` : ""}\n\n#NDR14 #DivineReversal`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyAllPrayers = () => {
    const allText =
      PRAYERS_DATA.map(
        (item) =>
          `━━━━━━━━━━━━━━━━━━━━\nPRAYER POINT ${item.id}: ${item.title.toUpperCase()}\nScripture: ${item.scripture}\n${item.scriptureFullKJV}\n\nPrayer:\n${item.prayer}\n\nConfession:\n${item.confession}${item.declarationHighlight ? `\n\n${item.declarationHighlight}` : ""}`
      ).join("\n\n") +
      "\n\n━━━━━━━━━━━━━━━━━━━━\nNight of Divine Reversal 14 (NDR14)\nProphet Isaiah Macwealth";

    navigator.clipboard.writeText(allText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const isLarge = fontSize === "large";

  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#060913",
          color: "#f8fafc",
          paddingTop: "calc(var(--navbar-height) + 40px)",
          paddingBottom: "100px",
          position: "relative",
        }}
      >
        {/* Subtle Background Glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "900px",
            height: "450px",
            background:
              "radial-gradient(circle at 50% 15%, rgba(245, 158, 11, 0.08) 0%, rgba(79, 70, 229, 0.04) 50%, transparent 80%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 20px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "48px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              paddingBottom: "36px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#f59e0b",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              NDR 14 • Prophetic Altar of Prayer
            </div>

            <h1
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                lineHeight: 1.15,
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "16px",
              }}
            >
              Prayers of Divine Reversal
            </h1>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "16px",
                maxWidth: "620px",
                margin: "0 auto 28px",
                lineHeight: 1.6,
              }}
            >
              Take these 5 prophetic prayer points, full King James Scriptures, and declarations with holy aggression. El-Gibbowr is reversing every negative verdict in your favor.
            </p>

            {/* Prayer Controls Toolbar */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              {/* Quick Jump Buttons */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  padding: "4px 8px",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#94a3b8",
                    marginRight: "4px",
                  }}
                >
                  Jump to:
                </span>
                {[1, 2, 3, 4, 5].map((num) => (
                  <a
                    key={num}
                    href={`#prayer-${num}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#f8fafc",
                      textDecoration: "none",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#f59e0b";
                      e.currentTarget.style.color = "#f59e0b";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.color = "#f8fafc";
                    }}
                  >
                    {num}
                  </a>
                ))}
              </div>

              {/* Text Size Toggle */}
              <button
                type="button"
                onClick={() => setFontSize(isLarge ? "standard" : "large")}
                style={{
                  padding: "8px 14px",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#cbd5e1",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Text:
                </span>
                <span style={{ fontWeight: 600, color: isLarge ? "#f59e0b" : "#ffffff" }}>
                  {isLarge ? "Large" : "Standard"}
                </span>
              </button>

              {/* Copy All Button */}
              <button
                type="button"
                onClick={copyAllPrayers}
                style={{
                  padding: "8px 16px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: copiedAll ? "#10b981" : "#f59e0b",
                  backgroundColor: copiedAll
                    ? "rgba(16, 185, 129, 0.1)"
                    : "rgba(245, 158, 11, 0.08)",
                  border: `1px solid ${copiedAll ? "rgba(16, 185, 129, 0.4)" : "rgba(245, 158, 11, 0.3)"}`,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s ease",
                }}
              >
                {copiedAll ? "✓ All Prayers Copied" : "Copy All 5 Prayers"}
              </button>
            </div>
          </div>

          {/* Prayer Points List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {PRAYERS_DATA.map((item) => {
              const isCopied = copiedId === item.id;

              return (
                <article
                  key={item.id}
                  id={`prayer-${item.id}`}
                  style={{
                    backgroundColor: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderLeft: "3px solid #f59e0b",
                    padding: "32px 28px",
                    position: "relative",
                    scrollMarginTop: "100px",
                  }}
                >
                  {/* Card Top Row: Label, Title & Copy */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "16px",
                      marginBottom: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#f59e0b",
                          fontWeight: 700,
                          marginBottom: "4px",
                        }}
                      >
                        Prayer Point {item.id}
                      </div>

                      <h2
                        style={{
                          fontFamily: "var(--font-heading), sans-serif",
                          fontSize: isLarge ? "24px" : "21px",
                          fontWeight: 700,
                          color: "#ffffff",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </h2>
                    </div>

                    <button
                      type="button"
                      onClick={() => copySinglePrayer(item)}
                      title="Copy this prayer point"
                      style={{
                        padding: "6px 12px",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: isCopied ? "#10b981" : "#94a3b8",
                        backgroundColor: isCopied
                          ? "rgba(16, 185, 129, 0.12)"
                          : "rgba(255, 255, 255, 0.04)",
                        border: `1px solid ${isCopied ? "rgba(16, 185, 129, 0.4)" : "rgba(255, 255, 255, 0.1)"}`,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {isCopied ? "✓ Copied" : "Copy"}
                    </button>
                  </div>

                  {/* SCRIPTURE IN FULL (KJV) - BEFORE PRAYER */}
                  <div
                    style={{
                      backgroundColor: "rgba(245, 158, 11, 0.04)",
                      border: "1px solid rgba(245, 158, 11, 0.2)",
                      borderLeft: "3px solid #fbbf24",
                      padding: "16px 20px",
                      marginBottom: "24px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginBottom: "10px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "11px",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "#fbbf24",
                          fontWeight: 700,
                        }}
                      >
                        Scripture
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#cbd5e1",
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {item.scripture}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: isLarge ? "16px" : "14.5px",
                        lineHeight: 1.7,
                        color: "#fde68a",
                        fontStyle: "italic",
                        margin: 0,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.scriptureFullKJV}
                    </p>
                  </div>

                  {/* Prayer Text */}
                  <div
                    style={{
                      marginBottom: "24px",
                      paddingLeft: "16px",
                      borderLeft: "2px solid rgba(255, 255, 255, 0.15)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#94a3b8",
                        fontWeight: 600,
                        marginBottom: "8px",
                      }}
                    >
                      Prayer
                    </div>
                    <p
                      style={{
                        fontSize: isLarge ? "18px" : "16px",
                        lineHeight: 1.75,
                        color: "#f8fafc",
                        fontWeight: 400,
                      }}
                    >
                      {item.prayer}
                    </p>
                  </div>

                  {/* Confession Box */}
                  <div
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.35)",
                      border: "1px solid rgba(245, 158, 11, 0.15)",
                      padding: "20px 22px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#f59e0b",
                        fontWeight: 700,
                        marginBottom: "8px",
                      }}
                    >
                      Confession
                    </div>

                    <p
                      style={{
                        fontSize: isLarge ? "17px" : "15px",
                        lineHeight: 1.7,
                        color: "#e2e8f0",
                        fontStyle: "italic",
                      }}
                    >
                      {item.confession}
                    </p>

                    {/* Final climactic proclamation for point 5 */}
                    {item.declarationHighlight && (
                      <div
                        style={{
                          marginTop: "16px",
                          paddingTop: "14px",
                          borderTop: "1px dashed rgba(245, 158, 11, 0.3)",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            fontSize: isLarge ? "20px" : "18px",
                            fontWeight: 800,
                            letterSpacing: "0.08em",
                            color: "#fbbf24",
                            textTransform: "uppercase",
                          }}
                        >
                          ARISE AND SHINE (X14)
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            color: "#cbd5e1",
                            marginTop: "4px",
                            fontWeight: 500,
                          }}
                        >
                          in the name of Jesus!
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom Action Section */}
          <div
            style={{
              marginTop: "56px",
              textAlign: "center",
              padding: "40px 24px",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              backgroundColor: "rgba(15, 23, 42, 0.4)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontSize: "20px",
                color: "#ffffff",
                marginBottom: "12px",
                fontWeight: 600,
              }}
            >
              Stand in Faith for Your Divine Reversal
            </h3>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "15px",
                maxWidth: "540px",
                margin: "0 auto 24px",
                lineHeight: 1.6,
              }}
            >
              Pray these points fervently with thanksgiving. Share with family, friends, and your church network to join in the spirit of reversal.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                justifyContent: "center",
              }}
            >
              <button
                type="button"
                onClick={copyAllPrayers}
                style={{
                  padding: "12px 24px",
                  fontSize: "14px",
                  fontWeight: 600,
                  backgroundColor: "#f59e0b",
                  color: "#060913",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {copiedAll ? "✓ Copied to Clipboard" : "Copy All Prayer Points"}
              </button>

              <Link
                href="/register"
                style={{
                  padding: "12px 24px",
                  fontSize: "14px",
                  fontWeight: 600,
                  backgroundColor: "transparent",
                  color: "#f8fafc",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  transition: "all 0.2s ease",
                }}
              >
                Register for NDR 14
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
