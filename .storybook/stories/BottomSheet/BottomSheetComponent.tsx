import React, {RefObject} from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';
import BottomSheet, {BottomSheetMethods} from '@devvie/bottom-sheet';
import ButtonComponent from '../Button/Button';
import {styles} from './styles';

interface Props {
  header: JSX.Element | string;
  footer?: JSX.Element | string;
  onHandleOpen?: () => void;
  onHandleClose: () => void;
  onHandleCancel: () => void;
  sheetRef: RefObject<BottomSheetMethods>;
  textInputProps?: TextInputProps;
  textDescriptionInputProps?: TextInputProps;
}

const BottomSheetComponent = (props: Props) => {
  const {
    header,
    onHandleClose,
    textDescriptionInputProps,
    footer,
    sheetRef,
    textInputProps,
    onHandleCancel,
  } = props;
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
    <BottomSheet
      backdropMaskColor={'rgba(112, 169, 161, 0.5)'}
      style={styles.bottomSheetContainer}
      height={500}
      ref={sheetRef}>
      <>{headerElem}</>
      <TextInput style={styles.textInputStyle} {...textInputProps} />
      <TextInput style={styles.textInputStyle} {...textDescriptionInputProps} />
      <View style={styles.buttonMainContainer}>
        <View style={{flex: 1}}>
          <ButtonComponent
            custumStyles={styles.buttonAdd}
            text="Add"
            onPress={onHandleClose}
            textStyles={styles.buttonAddText}
          />
        </View>
        <View style={styles.buttonDivider} />
        <View style={{flex: 1}}>
          <ButtonComponent
            custumStyles={styles.buttonCancel}
            text="Cancel"
            onPress={onHandleCancel}
          />
        </View>
      </View>
      {footerElem && <View style={styles.footerContainer}>{footerElem}</View>}
    </BottomSheet>
  );
};

export default BottomSheetComponent;
