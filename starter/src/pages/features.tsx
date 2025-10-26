import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./features.module.css";

// Extend this list with the capabilities you plan to ship next.
const featureSets = [
  {
    heading: "Pipeline Automation",
    description:
      "Move from ad-hoc scripts to orchestrated pipelines. Define triggers, approvals, and safe deploy windows.",
    bullets: [
      "Visual diffing for manifest vs. config.vdf pairs",
      "Role-based workflows to split duties between engineers and release managers",
      "Scheduled sync jobs with Slack or Discord alerts"
    ]
  },
  {
    heading: "Security & Compliance",
    description:
      "Protect your decryption keys and manifest metadata with vault integrations and tamper-proof trails.",
    bullets: [
      "Time-bound vault tokens with automatic rotation reminders",
      "Audit exports formatted for SOC 2 evidence collection",
      "Live integrity scoring with historical baselines"
    ]
  },
  {
    heading: "Knowledge & Support",
    description:
      "Give operators the context they need. Contextual documentation, bot-assisted answers, and scenario drills.",
    bullets: [
      "Inline guidance referencing the original CLI behaviors",
      "AI-powered runbook search seeded with your own documentation",
      "Sandbox mode for onboarding new technicians safely"
    ]
  }
];

export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>Feature Lab — ManiLua Ops Hub</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className="section">
          <div className="container">
            <div className={styles.heading}>
              <span>Feature Lab</span>
              <h1>Roadmap modules crafted for ManiLua-first teams.</h1>
              <p>
                The original maniluamaker helped unite manifest and decryption key data. This new
                interface doubles down on reliability, guardrails, and institutional knowledge.
              </p>
            </div>
            <div className={styles.featureList}>
              {featureSets.map((feature) => (
                <article key={feature.heading}>
                  <h2>{feature.heading}</h2>
                  <p>{feature.description}</p>
                  <ul>
                    {feature.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
