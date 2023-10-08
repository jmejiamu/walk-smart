import React from 'react';
import { View } from 'react-native';
import ListCard from './ListCard';

const JoinCardMeta = {
    title: 'ListCard',
    component: ListCard,
    decorators: [
        Story => (
            <View style={{ margin: 20 }}>
                <ListCard 
                    EventName='Coding Day'
                    Date='12/21/23'
                    Location='12 main 7av'
                />
            </View>
        ),
    ],
};

export default JoinCardMeta;
export const Basic = {};
