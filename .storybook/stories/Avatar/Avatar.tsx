import React from "react";
import { Image, ImageStyle, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "../../../src/theme";

interface Props {
    avatarContainerStyle?: ViewStyle;
    avatarImageStyle?: StyleProp<ImageStyle>;
    uri?: string;
}

const Avatar = (props: Props) => {
    return (
        <View style={[styles.avatar, props.avatarContainerStyle]}>
            <Image
                style={[styles.avatarImage, props.avatarImageStyle]}
                source={props.uri ? { uri: props.uri } : require('./avatar.png')}
            />
        </View>
    )
}

export default Avatar;
const styles = StyleSheet.create({
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