import React from 'react';
import Alert from './Alert';
import { View } from 'react-native';

const AlertMeta = {
    title: 'Alert',
    component: Alert,
    decorators: [
        Story => (
            <View style={{ margin: 10 }}>
                <Alert
                    Message='hey this is a test' />
            </View>
        ),
    ],
}

export default AlertMeta;
export const Basic = {};