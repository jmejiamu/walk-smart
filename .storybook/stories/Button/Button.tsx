import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../../src/theme';

interface DefProps {
  text: string;
  onPress: () => void;
}

export const Button = ({onPress, text}: DefProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.color_300,
    borderRadius: 30,
    alignItems: 'center',
  },
  text: {
    color: colors.color_100,
  },
});
