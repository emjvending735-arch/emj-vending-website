"use client";
import { useEffect } from "react";

/**
 * Global scroll-reveal engine.
 * Any element with [data-reveal] fades/slides in when it enters the viewport.
 * Add data-delay="1..6" for a stagger step (90ms each).
 * Respects prefers-reduced-motion automatically (CSS handles it).
 */
export default function Animate() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
