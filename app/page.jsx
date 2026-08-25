import Link from "next/link";
import Image from "next/image";
import Faq from "@/components/Faq";
import InstallGallery from "@/components/InstallGallery";

export default function Home() {
  return (
    <>
      <div className="top-contact-bar">
        <div className="wrap">
          <span>Free vending for Okaloosa &amp; Santa Rosa County businesses</span>
          <span className="top-contact-links">
            <a href="tel:+19138509092">Call or text (913) 850-9092</a>
            <span className="sep" aria-hidden="true">·</span>
            <a href="mailto:EmJVending735@gmail.com">EmJVending735@gmail.com</a>
          </span>
        </div>
      </div>
      <section className="hero dark">
        <div className="wrap">
          <div>
            <span className="slot">Okaloosa &amp; Santa Rosa Counties, FL</span>
            <h1>
              Snacks &amp; Drinks, <em>On Us.</em>
            </h1>
            <p className="lede">
              EmJ Vending places, stocks, and services modern card-reader vending
              machines in your building — at zero cost to your business. You pick
              the spot. We handle everything else.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-orange">Request a Free Machine</Link>
              <a href="tel:+19138509092" className="btn btn-ghost">Call or text us</a>
            </div>
          </div>
          <div className="hero-machine" aria-hidden="true">
            <Image
              src="/vending-machine.png"
              alt=""
              width={602}
              height={1022}
              priority
            />
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="wrap">
          <div className="trust-item"><span className="dot" />$0 cost to your business</div>
          <div className="trust-item"><span className="dot" />Card readers on every machine</div>
          <div className="trust-item"><span className="dot" />Stocked &amp; serviced by us</div>
          <div className="trust-item"><span className="dot" />No long-term contracts</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="slot" data-reveal>How it works</span>
          <h2 data-reveal data-delay={1}>Three steps. Zero work on your end.</h2>
          <div className="grid-3">
            <div className="card" data-reveal data-delay={1}>
              <span className="slot">A1</span>
              <h3>Quick site walk</h3>
              <p>We visit your location, look at foot traffic and space, and recommend the right machine mix — snacks, drinks, or both.</p>
            </div>
            <div className="card" data-reveal data-delay={2}>
              <span className="slot">A2</span>
              <h3>Free placement &amp; install</h3>
              <p>We deliver and install the machine at no charge, with a modern card reader from day one. No deposit, no fees.</p>
            </div>
            <div className="card" data-reveal data-delay={3}>
              <span className="slot">A3</span>
              <h3>We stock &amp; service it</h3>
              <p>Restocking, maintenance, and refunds are all on us. If something's wrong, one call and we make it right — fast.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <span className="slot" data-reveal>Who we serve</span>
          <h2 data-reveal data-delay={1}>Built for busy buildings.</h2>
          <p className="sub" data-reveal data-delay={2}>
            If people spend time in your space, vending should be earning its keep —
            keeping your team and guests happy without adding to anyone's workload.
          </p>
          <div className="grid-3">
            <div className="card" data-reveal data-delay={1}>
              <span className="slot">B1</span>
              <h3>Offices &amp; workplaces</h3>
              <p>Keep your team fueled on-site. A stocked break room is the cheapest employee perk you'll ever add — because it costs you nothing.</p>
            </div>
            <div className="card" data-reveal data-delay={2}>
              <span className="slot">B2</span>
              <h3>Gyms &amp; fitness centers</h3>
              <p>Drinks, protein, and recovery snacks where your members already are. An amenity that works as hard as they do.</p>
            </div>
            <div className="card" data-reveal data-delay={3}>
              <span className="slot">B3</span>
              <h3>Hotels &amp; apartments</h3>
              <p>A 24/7 convenience amenity guests and residents expect — with zero front-desk workload and no cost to the property.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- why choose us (honest differentiators) ---- */}
      <section className="section">
        <div className="wrap">
          <span className="slot" data-reveal>Why EmJ</span>
          <h2 data-reveal data-delay={1}>Why businesses choose a local operator.</h2>
          <p className="sub" data-reveal data-delay={2}>
            The big national vendors treat your location like a route number. We
            don&apos;t. Here&apos;s what working with a local, owner-run company
            actually gets you.
          </p>
          <div className="grid-3">
            <div className="card" data-reveal data-delay={1}>
              <span className="slot">01</span>
              <h3>No minimums, no fees</h3>
              <p>Many big vendors set monthly sales quotas and bill you if a machine doesn&apos;t hit them. We don&apos;t. Free is actually free — no minimums, no surprise charges, ever.</p>
            </div>
            <div className="card" data-reveal data-delay={2}>
              <span className="slot">02</span>
              <h3>Products your people want</h3>
              <p>Instead of a one-size-fits-all planogram, we tailor the snacks and drinks to your location — and adjust anytime based on what actually sells.</p>
            </div>
            <div className="card" data-reveal data-delay={3}>
              <span className="slot">03</span>
              <h3>Cards &amp; Apple Pay standard</h3>
              <p>Every machine takes credit, debit, and tap-to-pay from day one, alongside cash. Nobody gets turned away for not carrying bills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- AI smart cooler teaser ---- */}
      <section className="section dark ai-teaser">
        <div className="wrap ai-teaser-wrap">
          <div>
            <span className="badge-premium" data-reveal>Premium tier</span>
            <h2 data-reveal data-delay={1}>Ask about AI smart coolers.</h2>
            <p className="sub" data-reveal data-delay={2}>
              For qualifying high-traffic locations, we offer next-generation
              grab-and-go smart coolers: tap to unlock, take what you want, close
              the door, and the sensors charge you automatically. Cashierless,
              jam-free, and genuinely impressive.
            </p>
            <div style={{ marginTop: 24 }} data-reveal data-delay={3}>
              <Link href="/machines" className="btn btn-orange">See our machines</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent-installations gallery. Hidden until you add real install photos
          in components/InstallGallery.jsx — then it appears automatically. */}
      <InstallGallery />

      <section className="section">
        <div className="wrap">
          <span className="slot" data-reveal>Common questions</span>
          <h2 data-reveal data-delay={1}>Answers, up front.</h2>
          <Faq />
          <p className="sub" style={{ marginTop: 28 }} data-reveal>
            More questions? See the full <Link href="/faq" style={{ color: "var(--orange)", fontWeight: 600 }}>FAQ</Link>,
            or explore <Link href="/micro-markets" style={{ color: "var(--orange)", fontWeight: 600 }}>micro markets</Link> and{" "}
            <Link href="/healthy-vending" style={{ color: "var(--orange)", fontWeight: 600 }}>healthy vending</Link>.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Ready to put your break room to work?</h2>
          <Link href="/contact" className="btn">Request a Free Machine</Link>
        </div>
      </section>
    </>
  );
}
