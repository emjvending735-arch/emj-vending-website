import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | EmJ Vending",
  description:
    "Request a free vending machine placement quote for your office, gym, hotel, or apartment community in Okaloosa or Santa Rosa County, Florida.",
};

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="slot">Contact</span>
          <h1>Request your free machine.</h1>
          <p>
            Tell us a little about your location and we'll follow up with a
            recommendation — usually within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <ContactForm />
          <div style={{ marginTop: 48, display: "grid", gap: 8 }}>
            <span className="slot">Prefer to reach out directly?</span>
            
            <p><strong>Phone:</strong> <a href="tel:+19138509092" style={{ color: "var(--orange)" }}>(913) 850-9092</a></p>
            {/* TODO: swap to emily@emjvending.com after Google Workspace setup */}
            <p><strong>Email:</strong> <a href="mailto:EmJVending735@gmail.com" style={{ color: "var(--orange)" }}>EmJVending735@gmail.com</a></p>
            <p><strong>Service area:</strong> Okaloosa &amp; Santa Rosa counties, Florida</p>
          </div>
        </div>
      </section>
    </>
  );
}
