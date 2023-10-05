import React, {useState} from 'react';
import {View, TextInput, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../../src/theme';

interface Props {
  container?: ViewStyle;
  iconColor?: string;
  searchBarStyle?: TextStyle;
  textPlaceHolder?: string;
}

const Search = (props: Props) => {
  const {
    container,
    iconColor = colors.color_100,
    searchBarStyle,
    textPlaceHolder = 'Search...',
  } = props;

  const [text, setText] = useState('');

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
        onChangeText={setText}
        value={text}
        placeholder={textPlaceHolder}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  iconStyle: {
    paddingHorizontal: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.color_500,
    borderRadius: 20,
  },
  searchBarStyle: {
    flex: 1,
    backgroundColor: colors.color_500,
    borderRadius: 30,
    paddingVertical: 8,
  },
});
