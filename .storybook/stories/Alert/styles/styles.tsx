import { StyleSheet } from "react-native";
import { colors } from "../../../../src/theme/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color_500,
        borderRadius: 10
    },
    textMessage: {
        padding: 10,
        color: colors.color_200,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})