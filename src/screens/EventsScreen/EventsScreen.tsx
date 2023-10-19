import React from 'react';
import {View, Text} from 'react-native';
import ListCard from '../../../.storybook/stories/ListCard/ListCard';
import Search from '../../../.storybook/stories/Search/Search';

const EventsScreen = () => {
  return (
    <View style={{marginHorizontal: 20, marginTop: 20}}>
      <Search container={{marginBottom: 10}} />
      <ListCard EventName="Reading" Date="10/17/2013" Location="12 7th ave" />
      <View style={{margin: 10}} />
      <ListCard EventName="Reading" Date="10/17/2013" Location="12 7th ave" />
    </View>
  );
};

export default EventsScreen;
