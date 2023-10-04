import React from 'react';
import {View, Text} from 'react-native';
import JoinCard from './JoinCard';

const JoinCardMeta = {
  title: 'JoinCard',
  component: JoinCard,
  decorators: [
    Story => (
      <View style={{margin: 20}}>
        <JoinCard
          title="Event Name"
          joinedDate="10/34/2023"
          joined={23}
          likes={56}
        />
      </View>
    ),
  ],
};

export default JoinCardMeta;
export const Basic = {};
