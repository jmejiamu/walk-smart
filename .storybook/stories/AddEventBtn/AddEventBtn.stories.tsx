import React from 'react';
import AddEventBtn from './AddEventBtn';
import { View } from 'react-native';

const AddEventBtnMeta = {
    title: 'AddEventBtn',
    component: AddEventBtn,
    decorators: [
        Story => (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row-reverse',
                        alignSelf: 'flex-end',
                        padding: 20,
                    }}>
                    <AddEventBtn
                        btnStyle={{
                            height: 50,
                            width: 50,
                        }}
                    />
                </View>
            </View>
        ),
    ],
}

export default AddEventBtnMeta;
export const Basic = {};