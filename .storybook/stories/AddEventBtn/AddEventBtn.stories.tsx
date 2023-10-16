import React from 'react';
import AddEventBtn from './AddEventBtn';
import { View } from 'react-native';

const AddEventBtnMeta = {
    title: 'AddEventBtn',
    component: AddEventBtn,
    decorators: [
        Story => (
            <View style={{ margin: 10, height: 400, width: 300, backgroundColor: '#fff', borderColor: '#000', borderWidth: 2 }}>
                <AddEventBtn
                    btnStyle={{
                        top: 20,
                        left:20,
                        height: 50,
                        width: 50,
                    }}
                />
            </View>
        ),
    ],
}

export default AddEventBtnMeta;
export const Basic = {};