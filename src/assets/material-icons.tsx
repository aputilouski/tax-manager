import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MaterialIcon({ name, style }: any) {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
  return <Icon name={name} size={height} color={tintColor} style={iconStyle} />;
}

const IconProvider = (name: any) => ({
  toReactElement: (props: any) => MaterialIcon({ name, ...props }),
});

function createIconsMap() {
  return new Proxy(
    {},
    {
      get(target, name) {
        return IconProvider(name);
      },
    }
  );
}

export const MaterialIconsPack = {
  name: 'material',
  icons: createIconsMap(),
};
