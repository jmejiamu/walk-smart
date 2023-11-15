import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from "./styles";
interface DefProps {
  text: React.ReactNode;
  onPress: () => void;
}

const ButtonComponent = ({ onPress, text }: DefProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>

      {typeof "string" ?
        <Text style={styles.text}>{text}</Text>
        : text}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
