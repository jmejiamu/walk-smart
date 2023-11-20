import { useEffect } from "react";
import { FlatList, Platform, View } from "react-native"
import Card from "../Card/Card";
import { MyEvents } from "../../../interface/models";
import { useFetch } from "../../../hook/useFetch";

const JoinedScreen = () => {
    // this is a test endpoit will change when add joined events endpoint
    const { data, fetcheer } = useFetch<MyEvents>({
        error: true,
        recived: '',
        user_id: '',
        myEvents: []
    })

    useEffect(() => {
        fetcheer(`http://localhost:8080/api-v1/events/all/me?user_id=b67b8a34-85e6-41bf-a725-d9edd829bc7c`)
    }, [])



    return (
        <View style={{ flex: 1 }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: Platform.OS === 'android' ? 40 : 50 }}
                data={data.myEvents}
                renderItem={({ item }) => <Card data={item} />}
                keyExtractor={(item) => item.event_id ?? 'unknow'}
            />
        </View>
    )
}

export default JoinedScreen;