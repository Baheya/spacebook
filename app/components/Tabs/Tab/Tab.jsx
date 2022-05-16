import styles from './Tab.css';

import { Button } from '../../Button';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Tab({ color = '#EDA249', children, selected, index = 1 }) {
  return (
    <Button
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls="nils-tab"
      id="nils"
      style={{ '--backgroundColor': color }}
    >
      <span>{index}</span>
      {children}
    </Button>
  );
}
