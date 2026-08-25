import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          <Image
            className="footer-logo"
            src="/emj-logo.png"
            alt="EmJ Vending"
            width={200}
            height={176}
          />
          <p style={{ fontSize: 15, maxWidth: "36ch", marginTop: 4 }}>
            Full-service vending for offices, gyms, hotels, and apartments across
            Okaloosa and Santa Rosa counties — free to your business.
          </p>
        </div>
        <div>
          <h4>Pages</h4>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/machines">Machines</Link>
          <Link href="/micro-markets">Micro Markets</Link>
          <Link href="/healthy-vending">Healthy Vending</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:+19138509092">Call or text (913) 850-9092</a>
          {/* TODO: swap to emily@emjvending.com after Google Workspace setup */}
          <a href="mailto:EmJVending735@gmail.com">EmJVending735@gmail.com</a>
          <p style={{ fontSize: 14, marginTop: 8 }}>Fort Walton Beach, Florida</p>
        </div>
      </div>
      <div className="wrap footer-bottom" style={{ display: "block" }}>
        © {new Date().getFullYear()} EmJ Vending LLC · A military-family owned business proudly serving the Emerald Coast ·{" "}
        <Link href="/privacy" style={{ display: "inline", padding: 0 }}>Privacy Policy</Link>
      </div>
    </footer>
  );
}
