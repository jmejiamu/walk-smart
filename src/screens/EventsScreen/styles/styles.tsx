import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../theme';
const heighDim = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: heighDim * 0.2,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noEventTextStyle: {
    fontSize: 20,
    color: colors.color_100,
  },
});
