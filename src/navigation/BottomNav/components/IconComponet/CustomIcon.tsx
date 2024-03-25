import {TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
interface DefProps {
  index: number;
  route: any;
  onPress: () => void;
  isFocused: boolean;
}

export const CustomIcon = (props: DefProps) => {
  const {index, route, onPress, isFocused} = props;
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      key={index}
      style={styles.container}>
      <Icon
        name={
          route.name === 'Walk'
            ? 'walking'
            : route.name === 'Events'
            ? 'list'
            : route.name === 'Profile'
            ? 'user-alt'
            : 'user-cog'
        }
        size={25}
        color={isFocused ? colors.color_100 : colors.color_500}
      />
    </TouchableOpacity>
  );
};
