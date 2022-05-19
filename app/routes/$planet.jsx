import { Tab, tabLinks } from '~/components/Tabs/Tab';
import { Tabs, tabsLinks } from '~/components/Tabs';
import { StatCard, statCardLinks } from '~/components/Stats/StatCard';
import { Stats, statsLinks } from '~/components/Stats';
import { Content, contentLinks } from '~/components/Content';
import { gql } from 'graphql-request';
import { client } from '../client';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Source, sourceLinks } from '~/components/Source';

import styles from '../styles/planet.css';

const example = {
  name: 'Mercury',
  slug: 'mercury',
  overview: [
    {
      content:
        "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      source: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
    },
  ],
  structure: [
    {
      content:
        "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
      source:
        'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure',
    },
  ],
  surface: [
    {
      source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology',
      content:
        "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    },
  ],
  images: [
    {
      height: 0,
      url: 'https://media.graphassets.com/EAj94sEoTGiko5nUn9QF',
      width: 0,
    },
    {
      height: 0,
      url: 'https://media.graphassets.com/cUqXwevMT5uqggsLnqNM',
      width: 0,
    },
  ],
  statistics: [
    { name: 'Rotation', unit: 'day', value: '58.6' },
    { name: 'Revolution', unit: 'day', value: '87.97' },
    { name: 'Radius', unit: 'kilometer', value: '24622' },
    { name: 'Temperature', unit: 'celsius', value: '430' },
  ],
};

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
    ...tabLinks(),
    ...tabsLinks(),
    ...statsLinks(),
    ...contentLinks(),
    ...sourceLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export default function Index() {
  let { planet } = useLoaderData();

  return (
    <main>
      <section>
        <Tabs
          overview={
            <Content>
              <img src={planet.overview[0].image.url} alt="" />
              <div className="content-description">
                <h2>{planet.name}</h2>
                <p>{planet.overview[0].content}</p>
              </div>
              <Source link={planet.overview[0].source} />
            </Content>
          }
          structure={
            <Content>
              <img src={planet.structure[0].image.url} alt="" />
              <div className="content-description">
                <h2>{planet.name}</h2>
                <p>{planet.structure[0].content}</p>
              </div>
            </Content>
          }
          surface={
            <Content>
              <img src={planet.surface[0].image.url} alt="" />
              <div className="content-description">
                <h2>{planet.name}</h2>
                <p>{planet.surface[0].content}</p>
              </div>
            </Content>
          }
        />
        <Stats statistics={planet.statistics} />
      </section>
    </main>
  );
}
