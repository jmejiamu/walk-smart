import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { styles } from "./styles";
interface DefProps {
  text: string;
  onPress: () => void;
}

const ButtonComponent = ({onPress, text}: DefProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
