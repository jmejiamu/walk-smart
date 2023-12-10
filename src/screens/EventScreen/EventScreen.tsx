import { useContext, useEffect } from "react";
import { Dimensions, Platform, ScrollView, StyleSheet, Text, View } from "react-native"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../../theme";
import { styles } from "./styles";
import { Navigation, RootStacksParams } from "../../Main/Main";
import EventHeader from "../../../.storybook/stories/EventHeader/EventHeader";
import ButtonComponent from "../../../.storybook/stories/Button/Button";
import { EventCtx } from "../../Context/EventContext";
import Alert from "../../../.storybook/stories/Alert/Alert";
import Btn from "../../../.storybook/stories/Btn/Btn";

const { height } = Dimensions.get('screen')

const EventScreen = () => {
    const { params } = useRoute<RouteProp<RootStacksParams, 'Event'>>()
    const { auth, eventInfo, joined, joinedEvent, getEventByID, joinEvent } = useContext(EventCtx)

    const navigation = useNavigation<Navigation>()

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
            <Btn
                btnState="enable"
                action={() => navigation.navigate('Events', auth)}
                opacity={0.8}
                btnStyle={{
                    ...styles.navigationBackButton,
                    position: 'absolute',
                    zIndex: 99
                }}
                children={
                    <Icon
                        name="arrow-left"
                        color="#fff"
                        size={30}
                    />
                }
            />
            {joined.joined &&
                <Alert ContainerStyle={{
                    ...styles.alert,
                    position: 'absolute',
                    top: Platform.OS === 'ios' ? 220 : 190,
                    zIndex: 999,
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