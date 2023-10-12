import React from 'react';
import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, View } from "react-native";
import { colors } from '../../../../src/theme';

interface Props {
    title?: string;


    TextInputMeta?: TextInputProps;
    titleStyle?: StyleProp<TextStyle>
    textInputStyle?: StyleProp<TextStyle>;
}

const TextInputForm = ({ TextInputMeta, title, textInputStyle, titleStyle }: Props) => {
    return (
        <View style={style.container}>
            <Text style={[style.textTitle, titleStyle]}> {title} </Text>
            <TextInput
                style={[style.textInput, textInputStyle]}
                {...TextInputMeta}
            />
        </View>
    )
}

export default TextInputForm;
const style = StyleSheet.create({
    container: {
        padding: 10,
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
        paddingBottom: 10,
    }
})
