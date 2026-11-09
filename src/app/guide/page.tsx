"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function GuidePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/prayers");
  }, [router]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#060913",
        color: "#f8fafc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "#f59e0b" }}>
        Night of Divine Reversal
      </h1>
      <p style={{ color: "#94a3b8", marginBottom: "20px" }}>
        Redirecting to NDR 14 Prophetic Prayers...
      </p>
      <Link
        href="/prayers"
        style={{
          padding: "10px 22px",
          backgroundColor: "#f59e0b",
          color: "#060913",
          fontWeight: 700,
          textDecoration: "none",
          borderRadius: "6px",
          fontSize: "0.9rem",
        }}
      >
        Go to Prophetic Prayers →
      </Link>
    </div>
  );
}
