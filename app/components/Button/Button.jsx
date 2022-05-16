import styles from './Button.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Button({ href, children, ...delegated }) {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag href={href} {...delegated}>
      {children}
    </Tag>
  );
}
