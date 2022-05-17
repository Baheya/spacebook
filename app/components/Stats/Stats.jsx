import styles from './Stats.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Stats({children}) {
  return (
    <div className="stats">
      {children}
    </div>
  )
}
