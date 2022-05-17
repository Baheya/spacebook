import styles from './StatCard.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function StatCard({ label, value, unit }) {
  return (
    <div className="stat-card">
      <h3>{label}</h3>
      <p>
        {new Intl.NumberFormat('en-US', {
          style: 'unit',
          unit: unit,
        }).format(value)}
      </p>
    </div>
  );
}
