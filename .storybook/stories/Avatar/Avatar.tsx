import React from "react";
import { Image, ImageStyle, StyleProp,  View, ViewStyle } from "react-native";
import { styles } from "./styles";
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
