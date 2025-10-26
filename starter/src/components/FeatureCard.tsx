import styles from "./FeatureCard.module.css";

export type FeatureCardProps = {
  title: string;
  description: string;
  metric?: string;
};

export default function FeatureCard({ title, description, metric }: FeatureCardProps) {
  return (
    <article className={styles.card}>
      <header>
        <h3>{title}</h3>
        {metric ? <span className={styles.metric}>{metric}</span> : null}
      </header>
      <p>{description}</p>
      <button className="button secondary" type="button">
        Customize Module
      </button>
    </article>
  );
}
