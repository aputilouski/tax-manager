import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, ButtonProps } from '@ui-kitten/components';

const Fab: React.FC<ButtonProps> = props => <Button {...props} style={[styles.fab, props.style]} />;

const styles = StyleSheet.create({
  fab: {
    borderRadius: 9999,
    width: 64,
    height: 64,
    marginHorizontal: 16,
    marginVertical: 28,
  },
});

export default Fab;
