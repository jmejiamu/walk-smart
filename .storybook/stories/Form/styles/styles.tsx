import { StyleSheet } from "react-native";
import { colors, spacing } from '../../../../src/theme';

export const styles = StyleSheet.create({
    container: {
        padding: spacing.size_small,
    },
    textInput: {
        backgroundColor: colors.color_100,
        borderRadius: 5,
        height: 35,
    },
    textTitle:{
        color:'#fff',
        fontSize: 15,
        fontWeight:'600',
        paddingBottom: spacing.size_small,
    }
})
