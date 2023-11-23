import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../../../src/theme';

export const styles = StyleSheet.create({
  bottomSheetContainer: {
    paddingHorizontal: spacing.size_small,
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
    // justifyContent: 'flex-end',
    marginBottom: spacing.size_small,
  },
  header: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: spacing.size_large,
    color: colors.color_100,
  },
  textInputStyle: {
    backgroundColor: colors.color_400,
    borderRadius: spacing.size_large,
    height: 35,
    paddingHorizontal: spacing.size_small,
    marginBottom: spacing.size_large,
  },
});
