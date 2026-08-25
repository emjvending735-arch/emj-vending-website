import Link from "next/link";

export const metadata = {
  title: "Machines | EmJ Vending — Snack, Drink, Combo & AI Smart Coolers",
  description:
    "Explore the vending machines EmJ Vending places free of charge across Okaloosa and Santa Rosa counties — snack, drink, and combo machines, plus premium AI smart coolers for qualifying high-traffic locations.",
};

export default function Machines() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="slot">Our machines</span>
          <h1>The right machine for your space.</h1>
          <p>
            Every machine we place is modern, card-reader equipped, and fully
            serviced by us. After a quick site walk we recommend the setup that
            fits your traffic and layout — at zero cost to your business.
          </p>
        </div>
      </section>

      {/* ---- standard machine line-up ---- */}
      <section className="section">
        <div className="wrap">
          <span className="slot" data-reveal>The line-up</span>
          <h2 data-reveal data-delay={1}>Snacks, drinks, or both.</h2>
          <p className="sub" data-reveal data-delay={2}>
            Our standard machines cover the vast majority of offices, gyms,
            hotels, and apartment communities. Cashless from day one, cash
            accepted too.
          </p>
          <div className="grid-3">
            <div className="card" data-reveal data-delay={1}>
              <span className="slot">A1</span>
              <h3>Snack machines</h3>
              <p>
                Chips, candy, protein bars, cookies, and better-for-you options.
                Ideal for break rooms, lobbies, and waiting areas where people
                want a quick bite.
              </p>
            </div>
            <div className="card" data-reveal data-delay={2}>
              <span className="slot">A2</span>
              <h3>Drink machines</h3>
              <p>
                Sodas, water, sports and energy drinks, teas, and juices — kept
                cold and kept full. Perfect for gyms, warehouses, and busy
                offices.
              </p>
            </div>
            <div className="card" data-reveal data-delay={3}>
              <span className="slot">A3</span>
              <h3>Combo machines</h3>
              <p>
                Snacks and drinks in a single footprint. The efficient choice
                for higher-traffic spots and locations that only have room for
                one machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- AI smart cooler premium tier ---- */}
      <section className="section dark ai-section">
        <div className="wrap">
          <span className="badge-premium" data-reveal>Premium tier</span>
          <h2 data-reveal data-delay={1}>
            AI Smart Coolers — <em>grab, go, done.</em>
          </h2>
          <p className="sub" data-reveal data-delay={2}>
            For qualifying high-traffic locations, we offer next-generation AI
            smart coolers. The customer taps their card to unlock, takes what
            they want, and closes the door — the cooler&apos;s sensors detect
            the items and charge the card automatically. No buttons, no
            waiting, no jams.
          </p>
          <div className="grid-3" style={{ marginTop: 40 }}>
            <div className="card" data-reveal data-delay={1}>
              <span className="slot">01</span>
              <h3>Cashierless checkout</h3>
              <p>
                Image recognition and weight sensors identify every item removed
                and bill it instantly — a seamless, self-service experience.
              </p>
            </div>
            <div className="card" data-reveal data-delay={2}>
              <span className="slot">02</span>
              <h3>Fresh &amp; cold options</h3>
              <p>
                Because it&apos;s a true refrigerated cooler, it can carry cold
                drinks, fresh food, dairy, and grab-and-go meals a spiral
                machine can&apos;t.
              </p>
            </div>
            <div className="card" data-reveal data-delay={3}>
              <span className="slot">03</span>
              <h3>A premium upgrade</h3>
              <p>
                Sleek, modern, and cutting-edge — it signals to your team and
                guests that your space is a step ahead.
              </p>
            </div>
          </div>
          <p className="fine-print" data-reveal>
            * AI smart coolers are offered on a case-by-case basis to qualifying
            high-traffic locations. Ask about eligibility during your free site
            walk.
          </p>
        </div>
      </section>

      {/* ---- what's standard on every machine ---- */}
      <section className="section">
        <div className="wrap">
          <span className="slot" data-reveal>Standard on everything</span>
          <h2 data-reveal data-delay={1}>Every machine, every time.</h2>
          <div className="spec-row">
            <div className="spec" data-reveal data-delay={1}>
              <span className="dot" /> Credit, debit &amp; tap-to-pay readers
            </div>
            <div className="spec" data-reveal data-delay={2}>
              <span className="dot" /> Free delivery &amp; installation
            </div>
            <div className="spec" data-reveal data-delay={3}>
              <span className="dot" /> Restocked &amp; serviced by us
            </div>
            <div className="spec" data-reveal data-delay={4}>
              <span className="dot" /> Product mix you approve
            </div>
            <div className="spec" data-reveal data-delay={5}>
              <span className="dot" /> No contracts, no minimums
            </div>
            <div className="spec" data-reveal data-delay={6}>
              <span className="dot" /> Local, fast service calls
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Not sure which machine fits?</h2>
          <Link href="/contact" className="btn">Get a free recommendation</Link>
        </div>
      </section>
    </>
  );
}
