import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from './Button';
import {spacing} from '../../../src/theme';

const ButtonMeta = {
  title: 'Button',
  component: Button,
  decorators: [
    Story => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const Basic = {
  args: {
    text: 'Basic',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: spacing.size_medium,
  },
});
