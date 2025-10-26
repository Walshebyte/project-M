import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.hero} section`}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className={styles.eyebrow}>Steam Depot Intelligence</span>
            <h1>
              Control every manifest. <span>Ship keys securely.</span>
            </h1>
            <p>
              ManiLua Ops Hub transforms the original CLI into a guided mission control. Onboard new
              operators, audit key rotations, and stage manifest scripts with visual confidence.
            </p>
            <div className={styles.actions}>
              <Link href="#workflow" className="button primary">
                Explore Workflow
              </Link>
              <Link href="/features" className="button secondary">
                View Feature Lab
              </Link>
            </div>
          </div>
          <div className={styles.panel}>
            <div className={styles.blade}>
              <span className={styles.caption}>Live Script Build</span>
              {/* Replace the sample script with a real-time feed from your automation pipeline. */}
              <pre>
                <code>
                  {`addappid(441590)
addappid(228980, 1, "9E8F-***-B4C2")
setManifestid(228980, "9817234567890123", 0)`}
                </code>
              </pre>
            </div>
            <div className={styles.bladeAlt}>
              <h3>Ops Quality Checklist</h3>
              <ul>
                <li>✓ Manifest + VDF parity checked</li>
                <li>✓ Key hashed to vault</li>
                <li>⌛ Awaiting approval workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
