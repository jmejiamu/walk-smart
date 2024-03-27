import {StyleSheet} from 'react-native';
import {colors, spacing} from '../../../../src/theme';

export const styles = StyleSheet.create({
  continer: {
    flexDirection: 'row',
    shadowColor: colors.color_100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  avatar: {
    backgroundColor: colors.color_100,
    width: 150,
    borderTopLeftRadius: spacing.size_medium,
    borderBottomLeftRadius: spacing.size_medium,
  },
  descriptionContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: colors.color_100,
    borderTopEndRadius: spacing.size_medium,
    borderBottomEndRadius: spacing.size_medium,
    padding: 5,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: '400',
  },
  textSubTitile: {
    fontSize: 18,
    fontWeight: '300',
  },
});
