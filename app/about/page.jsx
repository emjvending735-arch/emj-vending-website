import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | EmJ Vending",
  description:
    "EmJ Vending is a family-owned, full-service vending company based in Fort Walton Beach, Florida, run by Jordan and Emily Hall.",
};

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="slot">About us</span>
          <h1>A family business, built to serve yours.</h1>
          <p>
            EmJ Vending was founded on a simple idea: vending should be a perk
            for your building, not a chore for your staff.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap about-grid">
          <div className="photo-frame" data-reveal>
            <Image
              src="/emily-jordan.jpg"
              alt="Jordan and Emily Hall, owners of EmJ Vending"
              width={960}
              height={1200}
              priority
            />
            <p className="photo-caption">Jordan &amp; Emily Hall — Fort Walton Beach, FL</p>
          </div>
          <div>
            <span className="slot" data-reveal>Meet the owners</span>
            <h2 data-reveal data-delay={1}>We&apos;re Jordan &amp; Emily.</h2>
            <p className="sub" style={{ marginTop: 14 }} data-reveal data-delay={2}>
              Emily runs EmJ Vending day to day — she&apos;s the one walking your
              site, building your product mix, keeping your machine stocked, and
              answering the phone when you call. Jordan builds and runs the
              technology behind the business, from the systems that track what&apos;s
              selling to the website you&apos;re reading right now.
            </p>
            <p className="sub" style={{ marginTop: 14 }} data-reveal data-delay={3}>
              We&apos;re an active-duty Air Force family rooted in the Hurlburt
              Field and Fort Walton Beach community, and we run this company the
              way that life teaches you to: show up on time, do the job right,
              and keep your word. Your machine gets stocked on schedule, problems
              get fixed fast, and nobody gets locked into a contract that
              doesn&apos;t serve them.
            </p>
            <p className="sub" style={{ marginTop: 14 }} data-reveal data-delay={4}>
              We&apos;re building EmJ Vending for the long haul — a local business
              our neighbors can count on for years, not a side project. When you
              work with us, you&apos;re not a ticket number in a national
              operator&apos;s queue. You&apos;re a neighbor.
            </p>
            <div style={{ marginTop: 28 }} data-reveal data-delay={5}>
              <Link href="/contact" className="btn btn-orange">Work with us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <span className="slot" data-reveal>Why we started</span>
          <h2 data-reveal data-delay={1}>Built from a simple frustration.</h2>
          <p className="sub" style={{ maxWidth: 760 }} data-reveal data-delay={2}>
            Everyone knows the break-room vending machine that&apos;s half-empty,
            eats your dollar, and only takes exact change. The national operators
            treat each location like a number on a route — restock when they get
            around to it, and good luck reaching a human when something breaks. We
            knew a local business could simply do it better: show up on time,
            stock what people actually want, take a tap of a card, and answer the
            phone. So we built one.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="slot" data-reveal>What sets us apart</span>
          <h2 data-reveal data-delay={1}>Local, hands-on, and easy to reach.</h2>
          <div className="grid-3">
            <div className="card" data-reveal data-delay={1}>
              <span className="slot">C1</span>
              <h3>You get an owner, not a call center</h3>
              <p>When you call, you reach Emily or Jordan — the people who actually run the business, not a ticket queue three states away.</p>
            </div>
            <div className="card" data-reveal data-delay={2}>
              <span className="slot">C2</span>
              <h3>We&apos;re in your community</h3>
              <p>We live and work right here on the Emerald Coast. Your machine is minutes away, not part of a route that swings by twice a month.</p>
            </div>
            <div className="card" data-reveal data-delay={3}>
              <span className="slot">C3</span>
              <h3>Service is the whole product</h3>
              <p>Anyone can drop a machine in a corner. We win by keeping it full, keeping it working, and making it effortless for you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <span className="slot" data-reveal>How we operate</span>
          <h2 data-reveal data-delay={1}>Three commitments, kept every week.</h2>
          <div className="grid-3">
            <div className="card" data-reveal data-delay={1}>
              <span className="slot">A1</span>
              <h3>Stocked, always</h3>
              <p>We track what sells and restock before shelves go empty — not after your team starts complaining.</p>
            </div>
            <div className="card" data-reveal data-delay={2}>
              <span className="slot">A2</span>
              <h3>Fixed, fast</h3>
              <p>Machine issues get a rapid response from someone local. No national call center, no week-long wait.</p>
            </div>
            <div className="card" data-reveal data-delay={3}>
              <span className="slot">A3</span>
              <h3>Honest, period</h3>
              <p>No hidden fees, no lock-in contracts, no surprises. If we can&apos;t earn the placement on service, we don&apos;t deserve it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Let&apos;s talk about your space.</h2>
          <Link href="/contact" className="btn">Contact us</Link>
        </div>
      </section>
    </>
  );
}
