import { StyleSheet } from "react-native";
import { colors, spacing } from "../../../../src/theme";

export const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: colors.color_300,
      borderRadius: spacing.size_large,
      alignItems: 'center',
    },
    text: {
      color: colors.color_100,
    },
  });