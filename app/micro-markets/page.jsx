export const metadata = {
  title: "Micro Markets | EmJ Vending — Coming Soon",
  description:
    "Self-serve micro markets from EmJ Vending are coming soon to Okaloosa and Santa Rosa counties — open shelves, coolers, and cashless self-checkout for larger locations.",
};

export default function MicroMarkets() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="slot">Micro markets</span>
          <h1>Coming soon.</h1>
          <p>
            We&apos;re getting ready to bring self-serve micro markets to the
            Emerald Coast — a mini convenience store right inside your building,
            with open shelves, glass-front coolers, fresh food, and simple
            cashless self-checkout. Perfect for larger, busier locations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="coming-soon-badge" data-reveal>Launching soon</div>
          <h2 data-reveal data-delay={1} style={{ marginTop: 18 }}>
            Bigger break rooms deserve more than a machine.
          </h2>
          <p className="sub" style={{ maxWidth: 720 }} data-reveal data-delay={2}>
            A micro market swaps the single vending machine for a full self-serve
            store — hundreds of snacks, drinks, and grab-and-go meals instead of
            forty. We&apos;re finalizing the details now. In the meantime, our
            free full-service vending machines are ready today.
          </p>
        </div>
      </section>
    </>
  );
}
