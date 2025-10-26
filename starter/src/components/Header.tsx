import Link from "next/link";
import styles from "./Header.module.css";

// Adjust navigation labels and targets to match your site map.
const navItems = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Feature Lab" },
  { href: "#workflow", label: "Workflow" },
  { href: "#playbooks", label: "Playbooks" },
  { href: "#contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.brand}>
            ManiLua<span>Ops</span>
          </Link>
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="#demo" className="button primary">
            Book a Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
