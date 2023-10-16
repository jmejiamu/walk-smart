import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import StorybookUIRoot from './.storybook';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// TODO: change this to 'false' so you have access to the main app.
const SBLOADER = 'true';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View>
          <Text>App</Text>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default SBLOADER === 'true' ? StorybookUIRoot : App;

const styles = StyleSheet.create({});
