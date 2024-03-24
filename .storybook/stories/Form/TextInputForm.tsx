import React from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';
interface Props {
  title?: string;
  textInputMeta?: TextInputProps;
  titleStyle?: StyleProp<TextStyle>;
  textInputStyle?: StyleProp<TextStyle>;
}

const TextInputForm = (props: Props) => {
  const {textInputMeta, title, textInputStyle, titleStyle} = props;
  return (
    <View style={styles.container}>
      <Text style={[styles.textTitle, titleStyle]}> {title} </Text>
      <TextInput
        style={[styles.textInput, textInputStyle]}
        {...textInputMeta}
      />
    </View>
  );
};

export default TextInputForm;
