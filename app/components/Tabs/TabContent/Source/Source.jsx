import styles from './Source.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Source({ link }) {
  return (
    <div className="source">
      <span>Source: </span>
      <a href={link}>Wikipedia</a>
    </div>
  );
}
