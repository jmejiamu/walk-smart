import React, {createRef} from 'react';
import {View} from 'react-native';
import BottomSheetComponent from './BottomSheetComponent';
import {BottomSheetMethods} from '@devvie/bottom-sheet';

import ButtonComponent from '../Button/Button';

const sheetRef = createRef<BottomSheetMethods>();

const onHandleOpen = () => {
  sheetRef.current?.open();
};

const onHandleClose = () => {
  sheetRef.current?.close();
};
const BottomSheetMeta = {
  title: 'AddEvent',
  component: BottomSheetComponent,
  decorators: [
    Story => (
      <View style={{flex: 1}}>
        <ButtonComponent text="OPEN" onPress={onHandleOpen} />
        <BottomSheetComponent
          header="Add Event"
          onHandleClose={onHandleClose}
          onHandleOpen={onHandleOpen}
          sheetRef={sheetRef}
          footer="Everyone near you can be part of your event, have fun!"
          textInputProps={{placeholder: 'Event name'}}
        />
      </View>
    ),
  ],
};

export default BottomSheetMeta;

export const Basic = {};
