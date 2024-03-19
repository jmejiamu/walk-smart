import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Btn from '../../../.storybook/stories/Btn/Btn';
import {styles} from './styles';

const SettingScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.userTextStyle}>User name</Text>
      <View style={styles.container}>
        <View style={{borderWidth: 0.5}} />
        <Text style={styles.textSettingStyle}>Notification</Text>
        <View style={{borderWidth: 0.5}} />
        <Text style={styles.textSettingStyle}>Security setting</Text>
        <View style={{borderWidth: 0.5}} />
        <Text style={styles.textSettingStyle}>Change theme</Text>
        <View style={{borderWidth: 0.5}} />
        <Text style={styles.textSettingStyle}>Change Password</Text>
        <View style={{borderWidth: 0.5}} />
        <Btn btnState="enable" opacity={0.9} btnStyle={styles.buttonLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </Btn>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
