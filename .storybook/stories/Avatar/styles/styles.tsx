import { StyleSheet } from "react-native";
import { colors } from "../../../../src/theme";

export const styles = StyleSheet.create({
    avatar: {
        alignItems: 'center',
        backgroundColor: colors.color_400,
        borderRadius: 50,
        height: 100,
        justifyContent: 'center',
        width: 100
    },
    avatarImage: {
        borderRadius: 50,
        height: 90,
        resizeMode: 'stretch',
        width: 90,
    }
})