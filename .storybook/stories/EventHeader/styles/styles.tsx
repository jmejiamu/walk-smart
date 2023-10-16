import { Dimensions, StyleSheet } from "react-native";
import { colors, spacing } from "../../../../src/theme";

const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    rightElemContainer: {
      flexDirection: 'row-reverse',
    },
    bckImage: {
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
    },
    image: {
      height: height * 0.46,
      padding: spacing.size_medium,
    },
    eventNameContainer: {
      marginTop: height * 0.3,
    },
    eventName: {
      fontSize: 45,
      justifyContent: 'flex-end',
      color: colors.color_500,
    },
  });
