import { StyleSheet, Text, View } from "react-native"
import JoinCard from "../../../../.storybook/stories/JoinCard/JoinCard"
import { Events } from "./interface";
import { colors } from "../../../theme";

const Badge = () => {
    return (

        <View style={styles.badgeContainer} >
            <Text style={styles.badgeText}>LIVE</Text>
        </View >
    )
};

const Card = ({data}: {data:Events}) => {
    return (
        <JoinCard
            key={data.id}
            isLive={data.IsLive}
            bage={<Badge />}
            containerStyle={{ marginHorizontal: 30, marginVertical: 15 }}
            titleStyle={{ fontSize: 18 }}
            title={data.EventName}
            likes={data.Likes}
            joined={data.Joined}
            joinedDate={data.Date}
        />
    )
}

const styles = StyleSheet.create({
    badgeText: {
        color: colors.color_400,
        paddingHorizontal: 5,
    },
    badgeContainer: {
        backgroundColor: colors.color_100,
        padding: 5,
        borderRadius: 5,
    },
});

export default Card;