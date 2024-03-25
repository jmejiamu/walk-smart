import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  WalkScreen,
  ProfileScreen,
  EventsScreen,
  SettingScreen,
} from '../../screens';
import {BottomTabNav} from './components/BottomTabNav';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabNav props={props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Walk" component={WalkScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default BottomNav;
