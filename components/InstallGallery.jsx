import Image from "next/image";

/**
 * RECENT INSTALLATIONS GALLERY
 * ----------------------------
 * This is your social-proof section. It is intentionally EMPTY right now,
 * so the live site never shows blank photo frames before you have real
 * installs. The moment you add your first machine:
 *
 *   1. Drop the photo into /public  (e.g. /public/install-navarre-gym.jpg)
 *   2. Add an entry to the `installs` array below:
 *        { src: "/install-navarre-gym.jpg", alt: "Snack & drink machines at a Navarre gym" }
 *   3. Redeploy. The section appears automatically.
 *
 * Use REAL photos of REAL machines you've placed. Do not use stock photos
 * here — this section only builds trust if it's genuine.
 */
const installs = [
  // { src: "/install-1.jpg", alt: "EmJ Vending combo machine installed at a Fort Walton Beach office" },
  // { src: "/install-2.jpg", alt: "Drink machine placed at a Destin fitness center" },
  // { src: "/install-3.jpg", alt: "Snack machine in a Niceville apartment clubhouse" },
];

export default function InstallGallery() {
  if (installs.length === 0) return null;

  return (
    <section className="section">
      <div className="wrap">
        <span className="slot" data-reveal>Recent installations</span>
        <h2 data-reveal data-delay={1}>Now serving the Emerald Coast.</h2>
        <div className="install-grid">
          {installs.map((p, i) => (
            <div className="install-frame" key={i} data-reveal data-delay={(i % 3) + 1}>
              <Image src={p.src} alt={p.alt} width={800} height={600} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
