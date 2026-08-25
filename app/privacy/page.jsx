import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | EmJ Vending",
  description:
    "How EmJ Vending LLC collects, uses, and protects information submitted through this website.",
};

export default function Privacy() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="slot">Privacy policy</span>
          <h1>Your information, handled plainly.</h1>
          <p>Last updated: August 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap legal" style={{ maxWidth: 760 }}>
          <h3>Who we are</h3>
          <p>
            EmJ Vending LLC (&quot;EmJ Vending,&quot; &quot;we,&quot;
            &quot;us&quot;) is a vending services company based in Fort Walton
            Beach, Florida, serving Okaloosa and Santa Rosa counties. You can
            reach us anytime at EmJVending735@gmail.com or (913) 850-9092.
          </p>

          <h3>What we collect</h3>
          <p>
            When you submit our contact form, we collect the information you
            provide: your name, business name, email address, phone number, and
            your message. That&apos;s it — we don&apos;t ask for anything we
            don&apos;t need to respond to you.
          </p>

          <h3>How we use it</h3>
          <p>
            We use your information solely to respond to your inquiry, prepare
            a placement recommendation, and communicate with you about our
            services. We do not sell, rent, or share your information with
            third parties for their marketing purposes.
          </p>

          <h3>How form submissions are delivered</h3>
          <p>
            Contact form submissions are delivered to our email inbox by
            Formspree, a form-processing service, which handles the data
            according to its own privacy policy. Our website host may also log
            basic technical data (such as IP address and browser type) as part
            of ordinary website operation and security.
          </p>

          <h3>Cookies &amp; tracking</h3>
          <p>
            This site does not use advertising cookies or third-party tracking
            for marketing. If we add analytics in the future to understand how
            visitors use the site, we will update this policy.
          </p>

          <h3>How long we keep it</h3>
          <p>
            We keep inquiry emails as long as needed to serve you and maintain
            ordinary business records. If you&apos;d like your information
            deleted, email us and we&apos;ll take care of it.
          </p>

          <h3>Children</h3>
          <p>
            This website is intended for business audiences and is not directed
            at children under 13. We do not knowingly collect information from
            children.
          </p>

          <h3>Changes &amp; contact</h3>
          <p>
            If we update this policy, the date at the top will change. Questions
            about your information? Email EmJVending735@gmail.com — a real
            person reads it.
          </p>

          <p style={{ marginTop: 32 }}>
            <Link href="/contact" className="btn btn-orange">Back to contact</Link>
          </p>
        </div>
      </section>
    </>
  );
}
