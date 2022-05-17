import { Tab, tabLinks } from '~/components/Tabs/Tab';
import { Tabs, tabsLinks } from '~/components/Tabs';
import { StatCard, statCardLinks } from '~/components/Stats/StatCard';
import { Stats, statsLinks } from '~/components/Stats';

export function links() {
  return [...tabLinks(), ...tabsLinks(), ...statCardLinks(), ...statsLinks()];
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
        <StatCard label="Rotation Time" value="0.99" unit="day" />
        <StatCard label="Radius" value="6371" unit="kilometer" />
        <StatCard label="Average Temp" value="16" unit="celsius" />
      </Stats>
    </>
  );
}
