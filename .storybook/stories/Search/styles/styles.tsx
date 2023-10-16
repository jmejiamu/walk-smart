import { StyleSheet } from "react-native";
import { colors, spacing } from '../../../../src/theme';

export const styles = StyleSheet.create({
  iconStyle: {
    paddingHorizontal: spacing.size_small,
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.color_500,
    borderRadius: spacing.size_medium,
  },
  searchBarStyle: {
    flex: 1,
    backgroundColor: colors.color_500,
    borderRadius: spacing.size_large,
    paddingVertical: 8,
  },
});
