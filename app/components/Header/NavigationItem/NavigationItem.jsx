import { NavLink } from '@remix-run/react';

import styles from './NavigationItem.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function NavigationItem({ name, color, path }) {
  return (
    <li className="navigation-item">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'navigation-link active' : 'navigation-link'
        }
        to={`${path}/overview`}
        style={{ '--backgroundColor': color }}
      >
        {name}
      </NavLink>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="8"
        aria-hidden="true"
        focusable="false"
      >
        <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
      </svg>
    </li>
  );
}
