/* eslint-disable react/display-name */
import * as TabsComponent from '@radix-ui/react-tabs';
import { Link } from '@remix-run/react';
import styles from './Tabs.css';
import { useState } from 'react';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Tabs({
  overview,
  structure,
  surface,
  color = '#EDA249',
  active,
}) {
  return (
    <TabsComponent.Root
      defaultValue="overview"
      value={active}
      onValueChange={(value) => {}}
      className="tabs-root"
      style={{
        '--gridRow': '500px',
        '--gridRowDesktop': '400px',
        '--gridColumn': '60% 40%',
      }}
    >
      <TabsComponent.List>
        <TabsComponent.Trigger
          asChild
          value="overview"
          style={{ '--backgroundColor': color }}
        >
          <Link to="overview">
            <span>1</span> Overview
          </Link>
        </TabsComponent.Trigger>
        <TabsComponent.Trigger
          asChild
          value="structure"
          style={{ '--backgroundColor': color }}
        >
          <Link to="structure">
            <span>2</span> Structure
          </Link>
        </TabsComponent.Trigger>
        <TabsComponent.Trigger
          asChild
          value="surface"
          style={{ '--backgroundColor': color }}
        >
          <Link to="surface">
            <span>3</span> Surface
          </Link>
        </TabsComponent.Trigger>
      </TabsComponent.List>
      <TabsComponent.Content value="overview">{overview}</TabsComponent.Content>
      <TabsComponent.Content value="structure">
        {structure}
      </TabsComponent.Content>
      <TabsComponent.Content value="surface">{surface}</TabsComponent.Content>
    </TabsComponent.Root>
  );
}
