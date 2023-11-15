import { StyleSheet } from "react-native";
import { colors } from "../../../theme";


export const styles = StyleSheet.create({
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
    joinText : {
        fontSize: 15, 
        fontWeight: '600'
    }

});