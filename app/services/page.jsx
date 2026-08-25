import Link from "next/link";

export const metadata = {
  title: "Services | EmJ Vending",
  description:
    "Free vending machine placement, stocking, and service for offices, gyms, hotels, and apartments in Okaloosa and Santa Rosa counties, Florida.",
};

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="slot">Services</span>
          <h1>Full-service vending. Free to your business.</h1>
          <p>
            One partner handles the whole thing — placement, stocking, maintenance,
            and payments. Here's exactly what that means.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="slot" data-reveal>The offer</span>
          <h2 data-reveal data-delay={1}>What "zero cost" actually covers.</h2>
          <div className="grid-3">
            <div className="card" data-reveal data-delay={1}>
              <span className="slot">A1</span>
              <h3>Free machine placement</h3>
              <p>We supply and install the machine at no charge. No deposit, no rental fee, no installation cost — ever.</p>
            </div>
            <div className="card" data-reveal data-delay={2}>
              <span className="slot">A2</span>
              <h3>Stocking &amp; restocking</h3>
              <p>We monitor sales and restock on a schedule matched to your traffic, so popular items don't sit empty.</p>
            </div>
            <div className="card" data-reveal data-delay={3}>
              <span className="slot">A3</span>
              <h3>Maintenance &amp; refunds</h3>
              <p>Jammed coil, payment issue, out-of-date product — we handle it, including customer refunds. Your staff never touches the machine.</p>
            </div>
            <div className="card" data-reveal data-delay={1}>
              <span className="slot">B1</span>
              <h3>Card readers standard</h3>
              <p>Every machine takes credit, debit, and tap-to-pay from day one. Cash works too — but nobody gets turned away for not carrying it.</p>
            </div>
            <div className="card" data-reveal data-delay={2}>
              <span className="slot">B2</span>
              <h3>Product mix you approve</h3>
              <p>Snacks, drinks, healthier options, or a combo — we build the selection around your people and adjust based on what actually sells.</p>
            </div>
            <div className="card" data-reveal data-delay={3}>
              <span className="slot">B3</span>
              <h3>No long-term contracts</h3>
              <p>We earn the placement every month. If it's not working for you, we remove the machine — no penalties, no fine print.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <span className="slot" data-reveal>Machine options</span>
          <h2 data-reveal data-delay={1}>Matched to your space and traffic.</h2>
          <p className="sub">
            After a quick site walk we recommend the right setup. Common configurations:
          </p>
          <div className="grid-3">
            <div className="card" data-reveal data-delay={1}>
              <span className="slot">C1</span>
              <h3>Snack machines</h3>
              <p>Chips, candy, protein bars, pastries, and better-for-you options for break rooms and lobbies.</p>
            </div>
            <div className="card" data-reveal data-delay={2}>
              <span className="slot">C2</span>
              <h3>Drink machines</h3>
              <p>Sodas, water, sports drinks, energy drinks, and juices — kept cold and kept full.</p>
            </div>
            <div className="card" data-reveal data-delay={3}>
              <span className="slot">C3</span>
              <h3>Combo setups</h3>
              <p>Snacks and drinks side by side for higher-traffic locations like gyms, hotels, and larger offices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="slot" data-reveal>Service area</span>
          <h2 data-reveal data-delay={1}>Proudly local to the Emerald Coast.</h2>
          <p className="sub">
            We serve businesses across <strong>Okaloosa and Santa Rosa counties</strong> —
            Fort Walton Beach, Destin, Niceville, Crestview, Mary Esther, Navarre,
            Milton, Gulf Breeze, and the surrounding communities. Because we're local,
            service calls and restocks happen fast.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2 data-reveal data-delay={1}>Get your free site assessment.</h2>
          <Link href="/contact" className="btn">Request a quote</Link>
        </div>
      </section>
    </>
  );
}
