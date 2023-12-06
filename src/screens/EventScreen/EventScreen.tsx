import { useContext, useEffect, useState } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native"
import { RouteProp, useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../../theme";
import { styles } from "./styles";
import { RootStacksParams } from "../../Main/Main";
import EventHeader from "../../../.storybook/stories/EventHeader/EventHeader";
import ButtonComponent from "../../../.storybook/stories/Button/Button";
import { EventCtx } from "../../Context/EventContext";
// import { Event, EventInfo } from "../../interface/models";
import Alert from "../../../.storybook/stories/Alert/Alert";
import { Joined } from "../../interface/models";

const { height } = Dimensions.get('screen')

const EventScreen = () => {
    const { params } = useRoute<RouteProp<RootStacksParams, 'Event'>>()
    const { auth, eventInfo, joined, joinedEvent, getEventByID, joinEvent } = useContext(EventCtx)

    useEffect(() => {
        if (joined.joined) {
            setTimeout(() => {
                // change state joined message on alert display for 1.5 seconds
                joinedEvent()
            }, 1500);
        }
    }, [joined])

    useEffect(() => {
        if (!params.event_id) return
        getEventByID(params.event_id);
    }, [params])


    return (
        <View>
            <EventHeader
                eventName={eventInfo.event[0]?.event_title}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ ...styles.scrollStyle, height: height * 0.30 }}>
                <Text> {eventInfo.event[0]?.event_description} </Text>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <ButtonComponent
                    text={<Text style={styles.buttonText}>Join</Text>}
                    onPress={() => joinEvent(auth.record.user_id, params.event_id, eventInfo.event[0])}

                />
                <View style={styles.joinContainer}>
                    <Icon
                        name="users"
                        size={30}
                        color={colors.color_200}
                    />
                    <Text style={styles.joinText}> 53 </Text>
                </View>
                {joined.joined && <Alert ContainerStyle={{ borderWidth: 1.10, borderColor: 'red' }} Message={joined.message} />}
            </View>
        </View>

    )
}

export default EventScreen;
