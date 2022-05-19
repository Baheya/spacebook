import { StatCard, statCardLinks } from './StatCard';
import styles from './Stats.css';

export function links() {
  return [...statCardLinks(), { rel: 'stylesheet', href: styles }];
}

export function Stats({ statistics }) {
  return (
    <div className="stats">
      {statistics.map((stat) => (
        <StatCard
          key={stat.value}
          label={stat.name}
          unit={stat.unit}
          value={stat.value}
        />
      ))}
    </div>
  );
}
