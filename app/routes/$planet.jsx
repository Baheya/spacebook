import { Tab, tabLinks } from '~/components/Tabs/Tab';
import { Tabs, tabsLinks } from '~/components/Tabs';
import { StatCard, statCardLinks } from '~/components/Stats/StatCard';
import { Stats, statsLinks } from '~/components/Stats';
import { Content, contentLinks } from '~/components/Content';

export function links() {
  return [
    ...tabLinks(),
    ...tabsLinks(),
    ...statCardLinks(),
    ...statsLinks(),
    ...contentLinks(),
  ];
}

export default function Index() {
  return (
    <>
      <Tabs>
        <Tab selected>Overview</Tab>
        <Tab>Structure</Tab>
        <Tab>Geology</Tab>
      </Tabs>
      <Stats>
        <StatCard label="Rotation Time" value="0.99" unit="year" />
        <StatCard label="Radius" value="6371" unit="kilometer" />
        <StatCard label="Average Temp" value="16" unit="celsius" />
      </Stats>
      <Content>
        <h2>Venus</h2>
        <p>
          Third planet from the Sun and the only known planet to harbor life.
          About 29.2% of Earth's surface is land with remaining 70.8% is covered
          with water. Earth's distance from the Sun, physical properties and
          geological history have allowed life to evolve and thrive.
        </p>
      </Content>
    </>
  );
}
