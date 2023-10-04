import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import StorybookUIRoot from './.storybook';
import React from 'react';

// TODO: change this to 'false' so you have access to the main app.
const SBLOADER = 'true';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
};

export default SBLOADER === 'true' ? StorybookUIRoot : App;

const styles = StyleSheet.create({});
