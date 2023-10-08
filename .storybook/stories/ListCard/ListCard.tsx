import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { colors } from "../../../src/theme";


interface Props {
    EventName?: string;
    Date?: string;
    Location?: string;

    AvatarStyle?: StyleProp<ViewStyle>;
    DescStyle?:  StyleProp<ViewStyle>;
}

const ListCard = ({ EventName, Date, Location, AvatarStyle, DescStyle}: Props) => {
    return (
        <View
            style={[styles.continer, styles.containerDirection]}
        >

            <View
                style={[styles.avatar, AvatarStyle]}
            ></View>
            <View
                style={[styles.descriptionContainer, DescStyle]}
            >
                <Text style={styles.textTitle}> {EventName} </Text>
                <Text style={styles.textSubTitile}> {Date} </Text>
                <Text style={styles.textSubTitile}> {Location} </Text>
            </View>
        </View>
    );
};

export default ListCard;

const styles = StyleSheet.create({
    continer: {
        flex: 1,
    },
    containerDirection: {
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
        height: 170,
        backgroundColor: colors.color_400,
        width: 150,

        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25

    },
    descriptionContainer: {

        flex: 1,


        backgroundColor: '#fff',
        height: 170,

        borderWidth: 2,
        borderColor: colors.color_400,

        borderTopEndRadius: 25,
        borderBottomEndRadius: 25,

        paddingLeft: 20,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'


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