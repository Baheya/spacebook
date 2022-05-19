import { json } from '@remix-run/node';
import { TabContent, tabContentLinks } from '~/components/Tabs/TabContent';

import { Tabs, tabsLinks } from '~/components/Tabs';
import { Stats, statsLinks } from '~/components/Stats';
import { gql } from 'graphql-request';
import { client } from '../../client';
import { useLoaderData, Outlet } from '@remix-run/react';

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
  return [...tabContentLinks()];
}

export default function Property() {
  let { planet, property } = useLoaderData();

  return (
    <TabContent
      name={planet.name}
      content={planet[property][0]}
      image={property === 'surface' ? planet.overview[0].image.url : undefined}
    />
  );
}
