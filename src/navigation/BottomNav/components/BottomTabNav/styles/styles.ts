import {StyleSheet} from 'react-native';
import {colors} from '../../../../../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.color_300,
    borderTopWidth: 0,
    marginHorizontal: 15,
    borderRadius: 75 / 2,
    marginBottom: 20,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
