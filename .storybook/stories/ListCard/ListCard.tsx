import React from "react";
import { View, Text,  StyleProp, ViewStyle  } from "react-native";
import { styles } from "./styles";
interface Props {
    EventName?: string;
    Date: string;
    Location?: string;
    AvatarStyle?: StyleProp<ViewStyle>;
    DescStyle?: StyleProp<ViewStyle>;
}

const ListCard = ({ EventName, Date, Location, AvatarStyle, DescStyle }: Props) => {
    return (
        <View style={styles.continer}>
            <View style={[styles.avatar, AvatarStyle, {justifyContent:'center', alignItems:'center'}]}>
                <Text style={{fontSize:50}}>🥳</Text>
            </View>
            <View style={[styles.descriptionContainer, DescStyle]}>
                <Text style={styles.textTitle}> {EventName} </Text>
                <Text style={[styles.textSubTitile, {marginVertical: 10}]}> {Date} </Text>
                <Text style={styles.textSubTitile}> {Location} </Text>
            </View>
        </View>
    );
};

export default ListCard;