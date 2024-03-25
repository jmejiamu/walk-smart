import {View} from 'react-native';
import React from 'react';
import {styles} from './styles/styles';
import {CustomIcon} from '../IconComponet';

export const BottomTabNav = ({props}: any) => {
  return (
    <View style={styles.container}>
      {props.state.routes.map((route, index: number) => {
        const {options} = props.descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = props.state.index === index;
        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name);
          }
        };
        return (
          <CustomIcon
            key={index}
            index={index}
            isFocused={isFocused}
            onPress={onPress}
            route={route}
          />
        );
      })}
    </View>
  );
};
