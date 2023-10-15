import {StyleSheet} from 'react-native';
import {colors} from '../../../../src/theme';

export const styles = StyleSheet.create({
  bottomSheetContainer: {
    paddingHorizontal: 10,
    backgroundColor: colors.color_600,
  },
  container: {
    flex: 1,
  },
  footer: {
    fontSize: 15,
    textAlign: 'center',
    color: colors.color_100,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  header: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 30,
    color: colors.color_100,
  },
  textInputStyle: {
    backgroundColor: colors.color_400,
    borderRadius: 30,
    height: 35,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
});
