import { useEffect } from "react";
import { FlatList, Platform, View } from "react-native"
import { Events } from "../Card/interface"
import Card from "../Card/Card"
import { useFetch } from "../../../hook/useFetch"
import {  MyEvents } from "../../../interface/models"
import React from "react"



const EventScreens = () => {
    
    const {data, fetcheer} = useFetch<MyEvents>({
        error: true,
        recived: '',
        user_id: '',
        myEvents: []
    })

    useEffect(()=>{
        fetcheer('http://localhost:8080/api-v1/events/all/me?user_id='+'e8c46a58-c4f6-4457-ba6e-db57909bdbca')
    },[])
    
    // const events: Events[] = [
    //     { id: 1, IsLive: true, EventName: 'Programming Fundamentals', Joined: 35, Likes: 354, Date: 'Oct 24, 2023' },
    //     { id: 2, IsLive: true, EventName: 'Reading & Writting ESL', Joined: 50, Likes: 205, Date: 'Oct 12, 2023' },
    //     { id: 3, IsLive: true, EventName: 'React Native Application', Joined: 60, Likes: 25, Date: 'Oct 12, 2023' },
    //     { id: 4, IsLive: true, EventName: 'Spanish Class Event', Joined: 50, Likes: 205, Date: 'Oct 13, 2023' },
    //     { id: 5, IsLive: true, EventName: 'Culture, Art Presentaion', Joined: 150, Likes: 253, Date: 'Oct 21, 2023' },
    //     { id: 6, IsLive: true, EventName: 'Full-stack development', Joined: 230, Likes: 205, Date: 'Oct 9, 2023' },
    //     { id: 7, IsLive: true, EventName: 'Full-stack development 123', Joined: 230, Likes: 205, Date: 'Oct 9, 2023' },
    // ]

    console.log("test => " , data.myEvents);
    

    return (
        <View style={{flex: 1}}>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: Platform.OS === 'android' ? 40: 50 }}
                data={data.myEvents}
                renderItem={({ item }) => <Card data={item} />}
                keyExtractor={(item) => item.event_id ?? 'unknow'}
            />
        </View>
    )
}

export default EventScreens;