import { StyleSheet } from "react-native";
import { colors } from "../../../../src/theme";

export const styles =  StyleSheet.create({
    continer: {
        flexDirection: 'row',
        shadowColor: colors.color_100,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    avatar: {
        backgroundColor: colors.color_100,
        width: 150,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    descriptionContainer: {
        flex: 1, 
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: colors.color_100,
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        padding: 5,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: '400',
    },
    textSubTitile: {
        fontSize: 18,
        fontWeight: '300'
    }
});