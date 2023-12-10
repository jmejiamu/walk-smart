import { useContext, useEffect, useState } from "react";
import { Dimensions, Platform, ScrollView, Text, View } from "react-native"
import { RouteProp, useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../../theme";
import { styles } from "./styles";
import { RootStacksParams } from "../../Main/Main";
import EventHeader from "../../../.storybook/stories/EventHeader/EventHeader";
import ButtonComponent from "../../../.storybook/stories/Button/Button";
import { EventCtx } from "../../Context/EventContext";
import Alert from "../../../.storybook/stories/Alert/Alert";

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
            {joined.joined &&
                <Alert ContainerStyle={{
                    position: 'absolute',
                    zIndex: 999,
                    top: Platform.OS === 'ios' ? 220 : 190,
                    right: 5,
                    borderWidth: 2.50,
                    height: 80,
                    justifyContent:'center',
                    borderColor: 'red'
                }}
                    Message={joined.message}
                />
            }
            <EventHeader
                eventName={eventInfo.event[0]?.event_title}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ ...styles.scrollStyle, height: Platform.OS === 'android' ? height * 0.26 : height * 0.33 }}>
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
            </View>
        </View>

    )
}

export default EventScreen;
