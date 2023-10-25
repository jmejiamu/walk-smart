import React, { RefObject } from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import ButtonComponent from '../Button/Button';
import { styles } from './styles';

interface Props {
  header: JSX.Element | string;
  footer?: JSX.Element | string;
  onHandleOpen?: () => void;
  onHandleClose: () => void;
  sheetRef: RefObject<BottomSheetMethods>;
  textInputProps?: TextInputProps;
  textDescriptionInputProps?: TextInputProps;
}

const BottomSheetComponent = (props: Props) => {
  const { header, onHandleClose, textDescriptionInputProps, footer, sheetRef, textInputProps } = props;
  const headerElem =
    typeof header === 'string' ? (
      <Text style={styles.header}>{header}</Text>
    ) : (
      header
    );

  const footerElem =
    typeof footer === 'string' ? (
      <Text style={styles.footer}>{footer}</Text>
    ) : (
      footer
    );
  return (
    <>
      <BottomSheet style={styles.bottomSheetContainer} ref={sheetRef}>
        <>{headerElem}</>
        <TextInput style={styles.textInputStyle} {...textInputProps} />
        <TextInput style={styles.textInputStyle} {...textDescriptionInputProps} />
        <ButtonComponent text="Add" onPress={onHandleClose} />
        {footerElem && <View style={styles.footerContainer}>{footerElem}</View>}
      </BottomSheet>
    </>
  );
};

export default BottomSheetComponent;
