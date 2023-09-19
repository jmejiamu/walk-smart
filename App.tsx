import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StorybookUIRoot from './.storybook'
import React from 'react';

const SBLOADER = "true"

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
};

export default SBLOADER == "true" ? StorybookUIRoot : App;

const styles = StyleSheet.create({});
