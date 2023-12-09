import { useContext, useEffect } from "react";
import { FlatList, Platform, View } from "react-native"
import Card from "../Card/Card";
import { EventCtx } from "../../../Context/EventContext";

const JoinedScreen = () => {
    const { auth, joinedEvents,  getJoinedEvents } = useContext(EventCtx)

    useEffect(() => {
        getJoinedEvents(auth.record.user_id) 
    }, [])

    
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: Platform.OS === 'android' ? 40 : 50 }}
                data={joinedEvents.events}
                renderItem={({ item }) => <Card data={item} />}
                keyExtractor={(item) => item.event_id ?? 'unknow'}
            />
        </View>
    )
}

export default JoinedScreen;