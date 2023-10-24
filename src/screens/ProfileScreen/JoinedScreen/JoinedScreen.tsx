import { FlatList, Platform, View } from "react-native"
import { Events } from "../Card/interface";
import Card from "../Card/Card";

const JoinedScreen = () => {
    const events: Events[] = [
        { id: 1, EventName: 'Programming Fundamentals', Joined: 53, Likes: 354, Date: 'Oct 24, 2023' },
        { id: 2, EventName: 'Reading & Writting ESL', Joined: 50, Likes: 205, Date: 'Oct 12, 2023' },
        { id: 3, EventName: 'React Native Application', Joined: 60, Likes: 25, Date: 'Oct 12, 2023' },
        { id: 4, EventName: 'Spanish Class Event', Joined: 50, Likes: 205, Date: 'Oct 13, 2023' },
        { id: 5, EventName: 'Culture, Art Presentaion', Joined: 150, Likes: 253, Date: 'Oct 21, 2023' },
        { id: 6, EventName: 'Full-stack development', Joined: 230, Likes: 205, Date: 'Oct 9, 2023' },
    ]

    return (
        <View style={{flex: 1}}>
            <FlatList
                showsVerticalScrollIndicator={false} 
                style={{ marginBottom: Platform.OS === 'android' ? 40: 50 }}
                data={events}
                renderItem={({ item }) => <Card data={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default JoinedScreen;