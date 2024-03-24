import React from 'react';
import {TouchableOpacity, Text, TextStyle, ViewStyle} from 'react-native';
import {styles} from './styles';
interface DefProps {
  text: React.ReactNode;
  onPress: () => void;
  custumStyles?: ViewStyle;
  textStyles?: TextStyle;
}

const ButtonComponent = (props: DefProps) => {
  const {onPress, text, custumStyles, textStyles} = props;
  return (
    <TouchableOpacity
      style={[styles.container, custumStyles]}
      onPress={onPress}
      activeOpacity={0.8}>
      {typeof 'string' ? (
        <Text style={[styles.text, textStyles]}>{text}</Text>
      ) : (
        text
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
