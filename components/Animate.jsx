"use client";
import { useEffect } from "react";

/**
 * Global scroll-reveal engine — FAIL-SAFE.
 * Content is visible by default. We only opt INTO the fade animation by adding
 * `.reveal-ready` to <html> once JS is running and IntersectionObserver exists.
 * If anything goes wrong, content simply stays visible (never blank).
 */
export default function Animate() {
  useEffect(() => {
    const root = document.documentElement;
    const els = document.querySelectorAll("[data-reveal]");

    // No observer support (old browser): leave content visible, do nothing.
    if (!("IntersectionObserver" in window)) return;

    // Opt into animation now that we know JS + observer are available.
    root.classList.add("reveal-ready");

    // Anything already in view on load reveals immediately.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    els.forEach((el) => io.observe(el));

    // Safety net: if for any reason an element hasn't revealed after 1.2s
    // (e.g. it never intersects), force it visible so content is never stuck.
    const failsafe = setTimeout(() => {
      els.forEach((el) => el.classList.add("in"));
    }, 1200);

    return () => {
      io.disconnect();
      clearTimeout(failsafe);
    };
  }, []);
  return null;
}
