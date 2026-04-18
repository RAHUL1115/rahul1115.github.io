"use client";
import { useEffect } from "react";

export default function EscapeToHome() {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") window.location.href = "/"; };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return null;
}
