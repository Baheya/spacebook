/* eslint-disable react/display-name */
import * as TabsComponent from '@radix-ui/react-tabs';
import styles from './Tabs.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Tabs({ overview, structure, surface, color = '#EDA249' }) {
  return (
    <TabsComponent.Root defaultValue="Overview" className="tabs-root">
      <TabsComponent.List>
        <TabsComponent.Trigger
          value="Overview"
          style={{ '--backgroundColor': color }}
        >
          <span>1</span> Overview
        </TabsComponent.Trigger>
        <TabsComponent.Trigger
          value="Structure"
          style={{ '--backgroundColor': color }}
        >
          <span>2</span> Structure
        </TabsComponent.Trigger>
        <TabsComponent.Trigger
          value="Surface"
          style={{ '--backgroundColor': color }}
        >
          <span>3</span> Surface
        </TabsComponent.Trigger>
      </TabsComponent.List>
      <TabsComponent.Content value="Overview">{overview}</TabsComponent.Content>
      <TabsComponent.Content value="Structure">
        {structure}
      </TabsComponent.Content>
      <TabsComponent.Content value="Surface">{surface}</TabsComponent.Content>
    </TabsComponent.Root>
  );
}
