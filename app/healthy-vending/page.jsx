import Link from "next/link";

export const metadata = {
  title: "Healthy Vending | EmJ Vending — Better-For-You Options",
  description:
    "Healthy vending options for gyms, offices, hotels, and apartment communities across Okaloosa and Santa Rosa counties — protein snacks, low-sugar drinks, and better-for-you choices, stocked and serviced free.",
};

export default function HealthyVending() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="slot">Healthy vending</span>
          <h1>Better-for-you options, right in the mix.</h1>
          <p>
            Vending doesn&apos;t have to mean junk food. We stock
            better-for-you snacks and drinks alongside the classics — or build
            you a fully health-focused machine — so your people have real
            choices.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="slot" data-reveal>What goes in</span>
          <h2 data-reveal data-delay={1}>Choices people actually want.</h2>
          <div className="grid-3">
            <div className="card" data-reveal data-delay={1}>
              <span className="slot">A1</span>
              <h3>Protein &amp; energy</h3>
              <p>
                Protein bars, nuts, trail mix, jerky, and recovery snacks —
                the staples gym members and hard-working crews reach for.
              </p>
            </div>
            <div className="card" data-reveal data-delay={2}>
              <span className="slot">A2</span>
              <h3>Smarter drinks</h3>
              <p>
                Water, sparkling water, electrolyte and sports drinks,
                low-sugar sodas, teas, and juices — kept cold and kept full.
              </p>
            </div>
            <div className="card" data-reveal data-delay={3}>
              <span className="slot">A3</span>
              <h3>Better-for-you snacks</h3>
              <p>
                Baked chips, popcorn, granola, whole-grain and lower-sugar
                options that satisfy without the crash.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <span className="slot" data-reveal>How we build your mix</span>
          <h2 data-reveal data-delay={1}>Your people, your ratio.</h2>
          <p className="sub" data-reveal data-delay={2}>
            Some locations want a 100% healthy machine. Most want a smart blend
            — familiar favorites next to better options, so nobody walks away
            empty-handed. You approve the planogram, we track what actually
            sells, and the mix gets sharper every restock. That&apos;s the
            advantage of a local operator over a set-it-and-forget-it national
            route.
          </p>
          <div className="grid-3">
            <div className="card" data-reveal data-delay={1}>
              <span className="slot">B1</span>
              <h3>Gyms &amp; fitness centers</h3>
              <p>Protein-forward machines that match the reason your members walked in.</p>
            </div>
            <div className="card" data-reveal data-delay={2}>
              <span className="slot">B2</span>
              <h3>Offices with wellness goals</h3>
              <p>Support your wellness program with choices that keep energy steady past 3pm.</p>
            </div>
            <div className="card" data-reveal data-delay={3}>
              <span className="slot">B3</span>
              <h3>Hotels &amp; communities</h3>
              <p>Guests and residents increasingly expect better options — give them a reason to stay in the building.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Want a healthier machine in your space?</h2>
          <Link href="/contact" className="btn">Request a Free Machine</Link>
        </div>
      </section>
    </>
  );
}
