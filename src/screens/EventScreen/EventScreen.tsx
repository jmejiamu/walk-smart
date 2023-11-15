import { Dimensions, ScrollView, Text } from "react-native"
import EventHeader from "../../../.storybook/stories/EventHeader/EventHeader";
import { View } from "react-native";
import ButtonComponent from "../../../.storybook/stories/Button/Button";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../../theme";
import { styles } from "./styles";

const { height } = Dimensions.get('screen')

const EventScreen = () => {
    return (
        <View>
            <EventHeader
                eventName="Developer"
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{...styles.scrollStyle,  height: height * 0.30}}>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
                <Text> test </Text>
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
