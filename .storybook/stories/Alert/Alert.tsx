import React from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native"
import { styles } from "./styles/styles";

interface Props {
    ContainerStyle?: ViewStyle;
    TextStyle?: TextStyle;
    Message?: string;
}

const Alert = ({ ContainerStyle, TextStyle, Message }: Props) => {
    return (
        <View style={[styles.container, ContainerStyle]}>
            <Text style={[styles.textMessage, TextStyle]} >{Message}</Text>
        </View>
    )
}

export default Alert;