import { StyleSheet } from "react-native";
import {colors, spacing} from '../../../../src/theme';


export const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.size_medium,
  },
  container: {
    borderWidth: 1,
    borderColor: colors.color_400,
    padding: spacing.size_medium,
    borderRadius: spacing.size_medium,
  },
  title: {
    fontSize: 36,
    color: colors.color_200,
  },
  footerText: {
    fontSize: 17,
    color: colors.color_400,
    fontWeight: 'bold',
  },
});
