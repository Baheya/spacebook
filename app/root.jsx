import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';

import { Header, headerLinks } from './components/Header';
import globalStyles from './styles/global.css';
import fonts from './styles/fonts.css';
import { redirect } from '@remix-run/node';

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

export const loader = ({ params }) => {
  if (!params.planet) {
    throw redirect('/mercury');
  }
  return null;
};

export default function App() {
  useLoaderData();

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
