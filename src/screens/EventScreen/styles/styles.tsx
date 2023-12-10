import { StyleSheet } from "react-native";
import { colors } from "../../../theme";


export const styles = StyleSheet.create({
    alert: {
        right: 5,
        borderWidth: 2.50,
        height: 80,
        justifyContent: 'center',
        borderColor: 'red'
    },
    scrollStyle: {
        marginTop: 40,
        marginHorizontal: 20
    },
    bottomContainer: {
        marginTop: 10,
        marginHorizontal: 20
    },
    buttonText: {
        fontSize: 18,
        color: colors.color_600,
        fontWeight: '600'
    },
    joinContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    joinText: {
        fontSize: 15,
        fontWeight: '600'
    },
    navigationBackButton: {
        alignItems: 'center',
        backgroundColor: colors.color_700,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.color_600,
        height: 50,
        justifyContent: 'center',
        left: 20,
        top: 44,
        width: 50,
    }
});