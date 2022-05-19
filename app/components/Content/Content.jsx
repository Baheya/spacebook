import styles from './Content.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Content({ children }) {
  return <article className="content">{children}</article>;
}
