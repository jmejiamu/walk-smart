import React from 'react';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors, spacing } from "../../../src/theme";
import { styles } from "./styles";

interface Props {
    action?: () => void;
    btnOpacity?: number;
    btnStyle?: ViewStyle;
    iconSize?: number;
    iconColor?: string;
    iconStyle?: TextStyle;
}

const AddEventBtn = ({ action, btnOpacity = 0.7, btnStyle, iconSize = spacing.size_large, iconColor = colors.color_400, iconStyle }: Props) => {
    return (
        <TouchableOpacity activeOpacity={btnOpacity} onPress={action} style={[styles.addEventBtnContainer, btnStyle]}>
            <Icon
                name="plus"
                size={iconSize}
                color={iconColor}
                style={iconStyle} 
            />
        </TouchableOpacity>
    )
}

export default AddEventBtn;