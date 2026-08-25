"use client";
import { useState } from "react";

// ============================================================
//  WHERE YOUR LEADS GO
//  Every submission is delivered to EmJVending735@gmail.com.
//
//  RECOMMENDED (2-minute setup): free Formspree form -> Gmail inbox
//   1. Go to https://formspree.io and sign up with EmJVending735@gmail.com
//   2. Create a new form; Formspree gives you an ID like "xrgvabcd"
//   3. Paste that ID below, replacing YOUR_FORM_ID
//   4. Redeploy. Done — leads arrive in the Gmail with a notification.
//
//  UNTIL you paste an ID, the form automatically falls back to opening
//  the visitor's email app with a pre-filled message TO the Gmail, so
//  you never lose a lead in the meantime.
// ============================================================
const FORMSPREE_ID = "YOUR_FORM_ID";
const LEAD_EMAIL = "EmJVending735@gmail.com";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // Fallback: no Formspree ID yet -> open a pre-filled email to the Gmail.
    if (FORMSPREE_ID === "YOUR_FORM_ID") {
      const body =
        `Name: ${data.get("name") || ""}\n` +
        `Business: ${data.get("business") || ""}\n` +
        `Email: ${data.get("email") || ""}\n` +
        `Phone: ${data.get("phone") || ""}\n\n` +
        `${data.get("message") || ""}`;
      const subject = `Vending machine request — ${data.get("business") || data.get("name") || "New lead"}`;
      window.location.href =
        `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card" style={{ marginTop: 36 }}>
        <span className="slot">Message sent</span>
        <h3 style={{ marginTop: 12 }}>Thanks — we&apos;ll be in touch shortly.</h3>
        <p style={{ color: "var(--slate)", marginTop: 8 }}>
          We typically respond within one business day. Need something sooner?
          Call or text us at (913) 850-9092.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="business">Business name</label>
          <input id="business" name="business" type="text" required autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
        <div className="field full">
          <label htmlFor="message">Tell us about your location</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Type of business, rough headcount or foot traffic, and where you'd want the machine."
          />
        </div>
      </div>
      <div style={{ marginTop: 24 }}>
        <button type="submit" className="btn btn-orange" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request my free machine"}
        </button>
      </div>
      {status === "error" && (
        <p className="form-note" style={{ color: "#c0392b" }}>
          Something went wrong sending your message. Please try again, or email us
          directly at EmJVending735@gmail.com.
        </p>
      )}
      <p className="form-note">
        No spam, no obligation — just a quick conversation about whether vending
        makes sense for your space.
      </p>
    </form>
  );
}
