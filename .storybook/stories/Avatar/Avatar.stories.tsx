import React from 'react';
import Avatar from './Avatar';
import { View } from 'react-native';

const AvatarMeta = {
    title: 'Avatar',
    component: Avatar,
    decorators: [
        Story => (
            <View style={{margin: 10}}>
                <Avatar />
            </View>
        ),
    ],
}

export default AvatarMeta;
export const Basic = {};