"use client";

/**
 * Reveal animations are now handled entirely in CSS (see globals.css:
 * @keyframes reveal-in on [data-reveal]). No JavaScript gates content
 * visibility, so pages can never render blank — on first load, after
 * client-side/menu navigation, or if JS fails to run. This component is
 * intentionally a no-op, kept so the import in layout.jsx stays valid.
 */
export default function Animate() {
  return null;
}
