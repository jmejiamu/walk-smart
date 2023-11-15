import { useEffect } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native"
import { RouteProp, useRoute} from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../../theme";
import { styles } from "./styles";
import { useFetch } from "../../hook/useFetch";
import { RootStacksParams } from "../../Main/Main";
import { EventInfo } from "../../interface/models";
import EventHeader from "../../../.storybook/stories/EventHeader/EventHeader";
import ButtonComponent from "../../../.storybook/stories/Button/Button";

const { height } = Dimensions.get('screen')

const EventScreen = () => {
    const {params}  = useRoute< RouteProp<RootStacksParams, 'Event'>>()

    const {data, fetcheer} = useFetch<EventInfo>({
        error: true,
        event_id: '',
        recived: '',
        event: []
    })

    useEffect(() => {
        fetcheer("http://localhost:8080/api-v1/events/event?event_id="+ params.event_id)
	}, [])

    
    
    return (
        <View>
            <EventHeader
                eventName={data.event[0]?.event_title}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{...styles.scrollStyle,  height: height * 0.30}}>
                <Text> {data.event[0]?.event_description} </Text> 
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
