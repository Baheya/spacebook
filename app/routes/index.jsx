import { Tab, tabLinks } from '~/components/Tabs/Tab';
import { Tabs, tabsLinks } from '~/components/Tabs';

export function links() {
  return [...tabLinks(), ...tabsLinks()];
}

export default function Index() {
  return (
    <>
      <Tabs>
        <Tab selected>Overview</Tab>
        <Tab>Structure</Tab>
        <Tab>Geology</Tab>
      </Tabs>
    </>
  );
}
