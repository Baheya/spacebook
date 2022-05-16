import styles from './Tabs.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Tabs({ children }) {
  return (
    <div role="tablist" aria-label="Information">
      {children}
    </div>
  );
}
