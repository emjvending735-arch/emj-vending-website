"use client";
import { useState } from "react";

export const defaultFaqs = [
  {
    q: "What does it cost my business?",
    a: "Nothing. The machine, installation, stocking, maintenance, and card readers are all covered by us. There's no deposit, no rental fee, and no service charge — ever.",
  },
  {
    q: "Who restocks the machine and handles problems?",
    a: "We do — completely. We monitor sales, restock on a schedule matched to your traffic, and handle every maintenance issue and customer refund. Your staff never touches the machine.",
  },
  {
    q: "Do the machines take cards?",
    a: "Yes. Every machine we place accepts credit, debit, and tap-to-pay from day one, alongside cash. No one gets turned away at the machine.",
  },
  {
    q: "Can we choose what goes in it?",
    a: "Absolutely. We'll propose a product mix based on your location — snacks, drinks, healthier options, or a combination — and you approve it. Then we adjust over time based on what actually sells.",
  },
  {
    q: "Are we locked into a contract?",
    a: "No long-term contracts. We earn the placement every month with good service. If it ever stops making sense for your space, we remove the machine — no penalties, no fine print.",
  },
  {
    q: "Do we earn anything from the machine?",
    a: "For qualifying higher-traffic locations, we offer commission arrangements. Ask about it during your site walk — we'll be straightforward about what your location supports.",
  },
  {
    q: "What's an AI smart cooler?",
    a: "It's a premium, refrigerated grab-and-go machine we offer for qualifying high-traffic locations. Customers tap a card to unlock it, take what they want, and close the door — sensors detect the items and charge them automatically. It can also carry cold drinks and fresh food a standard machine can't. Ask about eligibility during your site walk.",
  },
];

export default function Faq({ items }) {
  const faqs = items || defaultFaqs;
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <div key={i} className={`faq-item${open === i ? " open" : ""}`} data-reveal data-delay={(i % 3) + 1}>
          <button
            className="faq-q"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <span>{f.q}</span>
            <span className="faq-icon" aria-hidden="true" />
          </button>
          <div className="faq-a">
            <div className="faq-a-inner">
              <p>{f.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
