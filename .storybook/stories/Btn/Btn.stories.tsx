import React from 'react';
import Btn from './Btn';
import { Text, View } from 'react-native';

const BtnMeta = {
    title: 'Btn',
    component: Btn,
    decorators: [
        Story => (
            <View style={{ padding: 12 }}>
                <Btn
                    btnState='enable'
                    opacity={0.8}
                    btnStyle={{padding: 10}}
                >
                        <Text style={{fontSize: 20, textAlign:'center', color:'#fff'}}> Profile </Text>
                </Btn>
            </View>
        ),
    ],
};

export default BtnMeta;
export const Basic = {};