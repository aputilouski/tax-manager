import React from 'react';
import { TopNavigation, TopNavigationAction, Icon } from '@ui-kitten/components';

const BaseTopNavigation = ({ title, onPress }: { title: string; onPress: () => void }) => (
  <TopNavigation //
    accessoryLeft={() => (
      <TopNavigationAction //
        icon={<Icon name="arrow-back" />}
        onPress={onPress}
      />
    )}
    title={title}
  />
);

export default BaseTopNavigation;
