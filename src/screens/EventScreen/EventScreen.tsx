import { useContext, useEffect } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native"
import { RouteProp, useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../../theme";
import { styles } from "./styles";
import { RootStacksParams } from "../../Main/Main";
import EventHeader from "../../../.storybook/stories/EventHeader/EventHeader";
import ButtonComponent from "../../../.storybook/stories/Button/Button";
import { EventCtx } from "../../Context/EventContext";

const { height } = Dimensions.get('screen')

const EventScreen = () => {
    const { params } = useRoute<RouteProp<RootStacksParams, 'Event'>>()
    const { eventInfo, getEventByID } = useContext(EventCtx)

    useEffect(() => {
        getEventByID(params.event_id);
    }, [])

    return (
        <View>
            <EventHeader
                eventName={eventInfo.event[0].event_title}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ ...styles.scrollStyle, height: height * 0.30 }}>
                <Text> {eventInfo.event[0].event_description} </Text>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <ButtonComponent
                    text={<Text style={styles.buttonText}>Join</Text>}
                    onPress={() => console.log("this")}
                />
                <View style={styles.joinContainer}>
                    <Icon
                        name="users"
                        size={30}
                        color={colors.color_200}
                    />
                    <Text style={styles.joinText}> 53 </Text>
                </View>
            </View>
        </View>

    )
}

export default EventScreen;
