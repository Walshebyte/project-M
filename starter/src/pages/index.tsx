import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import styles from "./index.module.css";

// Update step copy to align with your team's ops language.
const workflowSteps = [
  {
    title: "Ingest Evidence",
    description:
      "Upload manifest archives and config.vdf exports. Metadata is hashed, validated, and staged for deeper comparisons.",
    metric: "60s setup"
  },
  {
    title: "Reconcile & Approve",
    description:
      "Pair manifest IDs with the right decryption keys. Enforce dual-operator reviews before shipping updates downstream.",
    metric: "Dual auth"
  },
  {
    title: "Deliver Lua Scripts",
    description:
      "Generate traceable Lua snippets that your automation runners can execute instantly across your depot fleet.",
    metric: "Auto-log"
  }
];

// Swap in your own runbooks or link to internal documentation.
const playbooks = [
  {
    title: "Zero-Downtime Key Rotation",
    description:
      "A guided sequence to rotate decryption keys across mirrored depots without interrupting live builds."
  },
  {
    title: "Emergency Manifest Rollback",
    description:
      "Prepared scripts for reverting to safe manifests with embedded approvals and audit trail exports."
  },
  {
    title: "Partner Build Handoff",
    description:
      "Share sanitized manifest packages with external QA partners using expiring access links and watermarked keys."
  }
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ManiLua Ops Hub</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <section className="section dark" id="workflow">
          <div className="container">
            <div className={styles.sectionHeading}>
              <span>Mission Workflow</span>
              <h2>Move from manifest chaos to predictable shipping in three guided phases.</h2>
            </div>
            <div className="card-grid">
              {workflowSteps.map((step) => (
                <FeatureCard key={step.title} {...step} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="intel">
          <div className="container">
            <div className={styles.sectionHeading}>
              <span>Telemetry &amp; Alerts</span>
              <h2>Every run is logged, signed, and ready for compliance reviews.</h2>
              <p>
                ManiLua Ops Hub keeps a heartbeat on your manifest pipelines. Export Redline reports,
                raise tickets automatically, and share read-only dashboards with stakeholders.
              </p>
            </div>
            <div className={styles.metrics}>
              <div>
                <strong>12,480</strong>
                <span>Manifests reconciled in the last quarter</span>
              </div>
              <div>
                <strong>38%</strong>
                <span>Faster incident resolution for depot mismatches</span>
              </div>
              <div>
                <strong>0</strong>
                <span>Unexplained key leaks since adopting Ops Hub</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section dark" id="playbooks">
          <div className="container">
            <div className={styles.sectionHeading}>
              <span>Playbook Library</span>
              <h2>Battle-tested response plans ready to deploy when things go sideways.</h2>
            </div>
            <div className={styles.playbookGrid}>
              {playbooks.map((playbook) => (
                <article key={playbook.title}>
                  <h3>{playbook.title}</h3>
                  <p>{playbook.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="demo">
          <div className="container">
            <div className={styles.demoPanel}>
              <div>
                <span>Request Access</span>
                <h2>Bring ManiLua Ops Hub to your studio.</h2>
                <p>
                  Share your current depot maintenance workflow and we will tailor a migration kit
                  that blends the original CLI with this new guided experience.
                </p>
              </div>
              <form className={styles.form}>
                {/* Replace input handling with preferred CRM integration */}
                <label htmlFor="email">Work Email</label>
                <input id="email" name="email" placeholder="devops@studio.com" type="email" />
                <label htmlFor="team">Team Size</label>
                <input id="team" name="team" placeholder="e.g. 6 platform engineers" />
                <button className="button primary" type="submit">
                  Request private walkthrough
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
