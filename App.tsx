import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import StorybookUIRoot from './.storybook';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/Main/Main';

// TODO: change this to 'false' so you have access to the main app.
const SBLOADER = 'false';

const App = () => {
  return (
    <NavigationContainer theme={{colors: {background: 'white'}}}>
      <Main />
    </NavigationContainer>
  );
};

export default SBLOADER === 'true' ? StorybookUIRoot : App;

const styles = StyleSheet.create({});
