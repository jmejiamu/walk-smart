import React, {Dispatch, SetStateAction, } from 'react';
import {View, TextInput, ViewStyle, TextStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from "./styles";
import {colors} from '../../../src/theme';

interface Props {
  container?: ViewStyle;
  iconColor?: string;
  searchBarStyle?: TextStyle;
  textPlaceHolder?: string;
  action: Dispatch<SetStateAction<string>>;
  textValue: string;
}

const Search = (props: Props) => {
  const {
    container,
    iconColor = colors.color_100,
    searchBarStyle,
    action,
    textValue,
    textPlaceHolder = 'Search...',
  } = props;

  return (
    <View style={[styles.mainContainer, container]}>
      <Icon
        name="search"
        size={25}
        color={iconColor}
        style={styles.iconStyle}
      />
      <TextInput
        style={[styles.searchBarStyle, searchBarStyle]}
        onChangeText={action}
        value={textValue}
        placeholder={textPlaceHolder}
      />
    </View>
  );
};

export default Search;
