import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WalkScreen, ProfileScreen, EventsScreen} from '../../screens';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../theme';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: colors.color_300},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="walking"
              size={25}
              color={focused ? colors.color_100 : colors.color_400}
            />
          ),
        }}
        name="Walk"
        component={WalkScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="list"
              size={25}
              color={focused ? colors.color_100 : colors.color_400}
            />
          ),
        }}
        name="Events"
        component={EventsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="user-alt"
              size={25}
              color={focused ? colors.color_100 : colors.color_400}
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
