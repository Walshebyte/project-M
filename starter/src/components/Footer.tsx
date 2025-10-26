import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h3>ManiLua Ops Hub</h3>
            <p>
              Strategic automation playbooks and tooling for Steam depot specialists who rely on
              ManiLua.
            </p>
          </div>
          <div>
            <span className={styles.heading}>Quick Links</span>
            <ul>
              <li>
                {/* Swap contact details for your real support channels. */}
                <a href="mailto:ops@manilua.dev">ops@manilua.dev</a>
              </li>
              <li>
                <a href="https://github.com/piracybound/maniluamaker" target="_blank" rel="noreferrer">
                  Original GitHub Tool
                </a>
              </li>
              <li>
                <a href="https://discord.gg/" target="_blank" rel="noreferrer">
                  Join Community Lab
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className={styles.heading}>Status Alerts</span>
            <p>
              Subscribe to get depot key rotation alerts and fresh manifest recipes.{" "}
              <span className={styles.hint}>Update copy via Footer.tsx</span>
            </p>
            <button className="button secondary" type="button">
              Get Notifications
            </button>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>&copy; {currentYear} ManiLua Collective. All rights reserved.</span>
          <span className={styles.small}>
            Built on a reinterpretation of the open-source maniluamaker by piracybound (CC BY-ND 4.0)
          </span>
        </div>
      </div>
    </footer>
  );
}
