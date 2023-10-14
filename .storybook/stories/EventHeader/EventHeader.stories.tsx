import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EventHeader from './EventHeader';
import {colors} from '../../../src/theme';

const EventHeaderMeta = {
  title: 'EventHeader',
  component: EventHeader,
  decorators: [
    Story => (
      <View>
        <EventHeader
          eventName="Reading"
          imageUrl="https://picsum.photos/600/600"
          badge={badge}
        />
      </View>
    ),
  ],
};

export default EventHeaderMeta;
export const Basic = {};

const styles = StyleSheet.create({
  badgeText: {
    color: colors.color_400,
    paddingHorizontal: 5,
  },
  badgeContainer: {
    backgroundColor: colors.color_100,
    padding: 5,
    borderRadius: 5,
  },
});

const badge = (
  <View style={styles.badgeContainer}>
    <Text style={styles.badgeText}>LIVE</Text>
  </View>
);
