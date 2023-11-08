import { createStackNavigator } from "@react-navigation/stack"
import Signin from "../auth/Signin";
import Register from "../auth/Register";
import BottomNav from "../navigation/BottomNav/BottomNav";
import { Auth } from "../interface/models";



export type RootStacksParams = {
    Signin: Auth;
    Register: Auth;
    Walkin: Auth,
}

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
            </Stack.Navigator>
        </>
    )
}

export default Main;