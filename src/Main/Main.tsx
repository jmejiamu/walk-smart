import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../auth/Signin';
import Register from '../auth/Register';
import BottomNav from '../navigation/BottomNav/BottomNav';
import {Auth} from '../interface/models';
import {NavigationProp} from '@react-navigation/native';
import {EventCtx} from '../Context/EventContext';
import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {EventScreen} from '../screens';

export type RootStacksParams = {
  Signin?: Auth;
  Register?: Auth;
  Walkin?: Auth;
  Event?: {event_id: string};
  Events?: Auth;
};

export type Navigation = NavigationProp<RootStacksParams>;

const Stack = createStackNavigator<RootStacksParams>();

const Main = () => {
  const {auth} = useContext(EventCtx);

  const [userToken, setUserToken] = useState<string | null>('');
  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      setUserToken(token);
    } catch (error) {
      console.log('🚀 ~ getData ~ error:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [userToken, auth]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {userToken !== null && userToken.length > 0 ? (
        <>
          <Stack.Screen name="Walkin" component={BottomNav} />
          <Stack.Screen name="Event" component={EventScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Signin" component={Signin} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Main;
