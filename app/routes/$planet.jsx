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

  return json({ planet, property: params.property });
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
  let { planet, property } = useLoaderData();

  return (
    <main>
      <section>
        <Tabs
          active={property}
          // overview={
          //   <TabContent name={planet.name} content={planet.overview[0]} />
          // }
          overview={<Outlet />}
          // structure={
          //   <TabContent name={planet.name} content={planet.structure[0]} />
          // }
          structure={<Outlet />}
          // surface={
          //   <TabContent
          //     name={planet.name}
          //     image={planet.overview[0].image.url}
          //     content={planet.surface[0]}
          //   />
          // }
          surface={<Outlet />}
        />
        <Stats statistics={planet.statistics} />
      </section>
    </main>
  );
}
