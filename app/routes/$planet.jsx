import { Tabs, tabsLinks } from '~/components/Tabs';
import { Stats, statsLinks } from '~/components/Stats';
import { Content, contentLinks } from '~/components/Content';
import { gql } from 'graphql-request';
import { client } from '../client';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import styles from '../styles/planet.css';

const getPlanetBySlug = gql`
  query GetPlanetQuery($slug: String!) {
    planet(where: { slug: $slug }) {
      name
      slug

      overview {
        content
        source
        image {
          url
        }
      }
      structure {
        content
        source
        image {
          url
        }
      }
      surface {
        source
        content
        image {
          url
        }
      }
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
    ...contentLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export default function Index() {
  let { planet } = useLoaderData();

  return (
    <main>
      <section>
        <Tabs
          overview={<Content name={planet.name} content={planet.overview[0]} />}
          structure={
            <Content name={planet.name} content={planet.structure[0]} />
          }
          surface={
            <Content
              name={planet.name}
              image={planet.overview[0].image.url}
              content={planet.surface[0]}
            />
          }
        />
        <Stats statistics={planet.statistics} />
      </section>
    </main>
  );
}
