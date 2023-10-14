import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import { colors } from '../../../src/theme';

interface Props {
    action?: () => void;
    btnState?: 'enable' | 'disable';
    btnStyle?: ViewStyle
    children: React.ReactNode;
    opacity?: number;
}

const Btn = (props: Props): React.ReactNode => {
    if (props.btnState === 'disable') {
        return (
            <TouchableWithoutFeedback>
                <View style={[{backgroundColor:'#D8D8D8'}, props.btnStyle]}>
                    {props.children}
                </View>
            </TouchableWithoutFeedback>
        )
    }
    return (
        <TouchableOpacity onPress={props.action} activeOpacity={props.opacity} style={[styles.btn, props.btnStyle]}>
            {props.children}
        </TouchableOpacity>
    )
}

export default Btn;
const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.color_100,
        borderRadius: 5,
        justifyContent: 'center',
    }
})