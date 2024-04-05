import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../../theme';
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    marginTop: '50%',
    fontSize: 20,
    color: colors.color_800,
    fontWeight: '500',
  },
  listContainer: {
    flex: 1,
  },
  flatListStyle: {
    marginBottom: Platform.OS === 'android' ? 40 : 50,
  },
});
