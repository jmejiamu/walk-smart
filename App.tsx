import { StyleSheet } from 'react-native';
import StorybookUIRoot from './.storybook';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './src/navigation/BottomNav/BottomNav';

// TODO: change this to 'false' so you have access to the main app.
const SBLOADER = 'false';

const App = () => {
  return (
    <NavigationContainer theme={{ colors: { background: 'white' } }}>
      <BottomNav />
    </NavigationContainer>
  );
};

export default SBLOADER === 'true' ? StorybookUIRoot : App;

const styles = StyleSheet.create({});
