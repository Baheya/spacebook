import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import { Header, headerLinks } from './components/Header';
import globalStyles from './styles/global.css';
import fonts from './styles/fonts.css';

export const links = () => [
  { rel: 'stylesheet', href: globalStyles },
  { rel: 'stylesheet', href: fonts },
  ...headerLinks(),
];

export const meta = () => ({
  charset: 'utf-8',
  title: 'Spacebook',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
