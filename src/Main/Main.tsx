import { createStackNavigator } from "@react-navigation/stack"
import Signin from "../auth/Signin";
import Register from "../auth/Register";
import BottomNav from "../navigation/BottomNav/BottomNav";
import { Auth } from "../interface/models";
import { EventScreen } from "../screens";
import { NavigationProp } from "@react-navigation/native";

export type RootStacksParams = {
    Signin: Auth;
    Register: Auth;
    Walkin: Auth;
    Event: {event_id?: string};
    Events: Auth
}

export type Navigation = NavigationProp<RootStacksParams>;

const Stack = createStackNavigator<RootStacksParams>();

const Main = () => {
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Walkin" component={BottomNav} />
                <Stack.Screen name="Event" component={EventScreen} />
            </Stack.Navigator>
        </>
    )
}

export default Main;