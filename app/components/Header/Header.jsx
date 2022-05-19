import { Link, useLocation } from '@remix-run/react';
import { useState, useEffect } from 'react';

import { Button, buttonLinks } from '../Button';
import { NavigationItem, navigationItemLinks } from './NavigationItem';

import { navigation } from '~/navigation';

import styles from './Header.css';

export function links() {
  return [
    ...navigationItemLinks(),
    ...buttonLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export function Header() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (visible) {
      setVisible(false);
    }
  }, [pathname]);

  return (
    <header>
      <nav className="navigation">
        <Link to="/">
          <h1>The Planets</h1>
        </Link>

        <Button
          onClick={() => setVisible(!visible)}
          className="button icon-button"
          type="button"
          aria-label="Icon-only Button"
          aria-expanded={visible}
          aria-controls="navigation-list"
          id="menu-trigger"
        >
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            focusable="false"
            className="icon-button__icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M80,28H20a3,3,0,0,1,0-6H80a3,3,0,0,1,0,6Z" />
            <path d="M80,53H20a3,3,0,0,1,0-6H80a3,3,0,0,1,0,6Z" />
            <path d="M80,78H20a3,3,0,0,1,0-6H80a3,3,0,0,1,0,6Z" />
          </svg>
          <span className="visually-hidden">Menu</span>
        </Button>
        <ul className="navigation-list">
          {navigation.map((route) => (
            <NavigationItem
              key={route.name}
              name={route.name}
              color={route.color}
              path={route.path}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
