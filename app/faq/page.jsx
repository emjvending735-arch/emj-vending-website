import Link from "next/link";
import Faq, { defaultFaqs } from "@/components/Faq";

export const metadata = {
  title: "FAQ | EmJ Vending — Every Question, Answered Up Front",
  description:
    "Answers to the most common questions about free vending machine placement, installation, service, payments, commissions, micro markets, and our Okaloosa & Santa Rosa county service area.",
};

const extraFaqs = [
  {
    q: "How fast can a machine be installed?",
    a: "After your free site walk and product-mix approval, installation typically happens within a couple of weeks, depending on machine availability. We'll give you a specific date before we commit — and we keep it.",
  },
  {
    q: "What does the machine need from our building?",
    a: "Just a standard 110V outlet and a level spot roughly 3–4 feet wide against a wall. Indoor placement is strongly preferred for equipment life and product quality. That's it — no plumbing, no special wiring.",
  },
  {
    q: "How often is the machine restocked?",
    a: "On a schedule matched to your traffic — busy locations weekly or more, lighter ones every other week. We track sales, so restocks happen before shelves go empty, not after.",
  },
  {
    q: "What happens if the machine breaks or eats someone's money?",
    a: "Call or text us and it gets handled — fast, by a local owner, not a national call center. Refunds are on us, always. A machine that doesn't work isn't earning for anyone, so downtime is our emergency, not yours.",
  },
  {
    q: "What areas do you serve?",
    a: "All of Okaloosa and Santa Rosa counties, Florida — Fort Walton Beach, Destin, Niceville, Crestview, Mary Esther, Navarre, Milton, Gulf Breeze, and surrounding communities.",
  },
  {
    q: "Do you do micro markets?",
    a: "Yes — for larger, busier locations (typically 50–100+ people on site), we offer self-serve micro markets with open shelves, coolers, and a self-checkout kiosk. See our Micro Markets page or ask at your site walk.",
  },
  {
    q: "Can we get healthy options?",
    a: "Absolutely. We stock better-for-you snacks and drinks alongside the classics, or build fully health-focused machines for gyms and wellness-minded offices. You approve the mix.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="slot">FAQ</span>
          <h1>Every question, answered up front.</h1>
          <p>
            Straight answers about cost, service, payments, and how placement
            works. If yours isn&apos;t here, call or text (913) 850-9092 — a
            real person answers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="slot" data-reveal>The basics</span>
          <h2 data-reveal data-delay={1}>Cost, service &amp; products.</h2>
          <Faq />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <span className="slot" data-reveal>Logistics</span>
          <h2 data-reveal data-delay={1}>Installation &amp; day-to-day.</h2>
          <Faq items={extraFaqs} />
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Still have a question?</h2>
          <Link href="/contact" className="btn">Ask us directly</Link>
        </div>
      </section>
    </>
  );
}
