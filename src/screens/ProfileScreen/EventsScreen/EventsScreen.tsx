import { useContext, useEffect } from "react";
import { FlatList, Platform, View } from "react-native"
import Card from "../Card/Card"
import { useFetch } from "../../../hook/useFetch"
import { MyEvents } from "../../../interface/models"
import React from "react"
import { EventCtx } from "../../../Context/EventContext";

const EventScreens = () => {
    const {auth} = useContext(EventCtx)
    const { data, fetcheer } = useFetch<MyEvents>({
        error: true,
        recived: '',
        user_id: '',
        myEvents: []
    })

    useEffect(() => {
        fetcheer(`http://localhost:8080/api-v1/events/all/me?user_id=${auth.record.user_id}`)
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

export default EventScreens;