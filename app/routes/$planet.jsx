import { Tabs, tabsLinks } from '~/components/Tabs';
import { Stats, statsLinks } from '~/components/Stats';
import { TabContent, tabContentLinks } from '~/components/Tabs/TabContent';
import { gql } from 'graphql-request';
import { client } from '../client';
import { json } from '@remix-run/node';
import { useLoaderData, Outlet, useMatches } from '@remix-run/react';

import styles from '../styles/planet.css';

const getPlanetBySlug = gql`
  query GetPlanetQuery($slug: String!) {
    planet(where: { slug: $slug }) {
      name
      slug

      statistics {
        name
        unit
        value
      }
    }
  }
`;

export let loader = async ({ params }) => {
  const { planet } = await client.request(getPlanetBySlug, {
    slug: params.planet,
  });

  return json({ planet });
};

export function links() {
  return [
    ...tabsLinks(),
    ...statsLinks(),
    ...tabContentLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export default function Index() {
  let { planet } = useLoaderData();

  return (
    <main>
      <section>
        <Tabs
          overview={<Outlet />}
          structure={<Outlet />}
          surface={<Outlet />}
        />
        <Stats statistics={planet.statistics} />
      </section>
    </main>
  );
}
