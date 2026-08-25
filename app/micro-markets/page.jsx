import Link from "next/link";

export const metadata = {
  title: "Micro Markets | EmJ Vending — Self-Serve Break Room Markets",
  description:
    "Upgrade your break room to a self-serve micro market: open shelves, coolers, and cashless self-checkout with hundreds of products. Free setup and full service for qualifying locations in Okaloosa and Santa Rosa counties, Florida.",
};

export default function MicroMarkets() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="slot">Micro markets</span>
          <h1>A mini convenience store, inside your building.</h1>
          <p>
            A micro market replaces the vending machine with open shelves,
            glass-front coolers, and a self-checkout kiosk — hundreds of
            products instead of forty, including fresh food. For larger
            locations, it&apos;s the single biggest break-room upgrade you can
            make.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="slot" data-reveal>How it works</span>
          <h2 data-reveal data-delay={1}>Browse. Scan. Go.</h2>
          <div className="grid-3">
            <div className="card" data-reveal data-delay={1}>
              <span className="slot">A1</span>
              <h3>Open shelves &amp; coolers</h3>
              <p>
                People pick items up, read labels, and choose from a far wider
                range than any machine can hold — snacks, drinks, fresh food,
                and grab-and-go meals.
              </p>
            </div>
            <div className="card" data-reveal data-delay={2}>
              <span className="slot">A2</span>
              <h3>Self-checkout kiosk</h3>
              <p>
                A simple kiosk takes card and tap-to-pay. No cashier, no line,
                open 24/7. We monitor sales remotely so restocks land before
                shelves go empty.
              </p>
            </div>
            <div className="card" data-reveal data-delay={3}>
              <span className="slot">A3</span>
              <h3>We run everything</h3>
              <p>
                Same deal as our machines: we set it up, stock it, service it,
                and handle every issue. Your only job is enjoying a better
                break room.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <span className="slot" data-reveal>Is it right for you?</span>
          <h2 data-reveal data-delay={1}>Built for bigger, busier locations.</h2>
          <p className="sub" data-reveal data-delay={2}>
            Micro markets shine where there&apos;s steady all-day traffic — think
            50–100+ people on site. If that&apos;s your building, a market keeps
            your team fed on-site instead of driving off for lunch. Smaller
            space or lighter traffic? A vending machine is usually the smarter
            fit, and we&apos;ll tell you so honestly at the site walk.
          </p>
          <div className="grid-3">
            <div className="card" data-reveal data-delay={1}>
              <span className="slot">B1</span>
              <h3>Larger offices &amp; call centers</h3>
              <p>Keep teams on-site through lunch with real food options, not just snacks.</p>
            </div>
            <div className="card" data-reveal data-delay={2}>
              <span className="slot">B2</span>
              <h3>Warehouses &amp; manufacturing</h3>
              <p>Round-the-clock shifts need round-the-clock food. A market never closes.</p>
            </div>
            <div className="card" data-reveal data-delay={3}>
              <span className="slot">B3</span>
              <h3>Hotels &amp; large residential</h3>
              <p>A lobby market doubles as an amenity and a revenue-quiet convenience guests love.</p>
            </div>
          </div>
          <p className="fine-print" data-reveal>
            * Micro markets are scoped case-by-case based on space, traffic, and
            security of the area. Ask about eligibility during your free site
            walk.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Think your space qualifies?</h2>
          <Link href="/contact" className="btn">Book a free site walk</Link>
        </div>
      </section>
    </>
  );
}
