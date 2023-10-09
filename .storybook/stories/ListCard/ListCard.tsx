import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle, Image } from "react-native";
import { styles } from "./styles";
interface Props {
    EventName?: string;
    Date?: string;
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
//     continer: {
//         flexDirection: 'row',
//         shadowColor: colors.color_100,
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.23,
//         shadowRadius: 2.62,
//         elevation: 4,
//     },
//     avatar: {
//         backgroundColor: colors.color_100,
//         width: 150,
//         borderTopLeftRadius: 20,
//         borderBottomLeftRadius: 20
//     },
//     descriptionContainer: {
//         flex: 1, 
//         backgroundColor: '#fff',
//         borderWidth: 1.5,
//         borderColor: colors.color_100,
//         borderTopEndRadius: 20,
//         borderBottomEndRadius: 20,
//         padding: 5,
//     },
//     textTitle: {
//         fontSize: 24,
//         fontWeight: '400',
//     },
//     textSubTitile: {
//         fontSize: 18,
//         fontWeight: '300'
//     }
// });