import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView, useWindowDimensions} from 'react-native';
import JoinedScreen from '../../screens/ProfileScreen/JoinedScreen/JoinedScreen';
import EventScreens from '../../screens/ProfileScreen/EventsScreen/EventsScreen';
import {colors, spacing} from '../../theme';

const Tab = createMaterialTopTabNavigator();

const TopTapNav = () => {
  const {height} = useWindowDimensions();
  return (
    <SafeAreaView style={{top: spacing.size_small, height: height * 0.7}}>
      <Tab.Navigator
        screenOptions={{
          lazy: true,
          tabBarPressColor: 'transparent',
          tabBarActiveTintColor: colors.color_200,
          tabBarInactiveTintColor: colors.color_400,
          tabBarIndicatorStyle: {
            borderWidth: 2,
            borderColor: colors.color_200,
          },
          tabBarIndicatorContainerStyle: {
            borderBottomWidth: 2,
            borderColor: colors.color_400,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarLabelStyle: {
              textTransform: 'capitalize',
              fontSize: spacing.size_medium,
            },
          }}
          name="My Events"
          component={EventScreens}
        />
        <Tab.Screen
          options={{
            tabBarLabelStyle: {
              textTransform: 'capitalize',
              fontSize: spacing.size_medium,
            },
          }}
          name="Joined"
          component={JoinedScreen}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TopTapNav;
