import React, {useContext} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Btn from '../../../.storybook/stories/Btn/Btn';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {EventCtx} from '../../Context/EventContext';
import {colors} from '../../theme';

const SettingScreen = () => {
  const {auth, signOut} = useContext(EventCtx);
  const handleSingout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      signOut();
    } catch (error) {
      console.log('🚀 ~ getData ~ error:', error);
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.userTextStyle}>@{auth.record.username}</Text>
      <View style={styles.container}>
        <View style={{borderWidth: 0.5, borderColor: colors.color_400}} />
        <Text style={styles.textSettingStyle}>Notification</Text>
        <View style={{borderWidth: 0.5, borderColor: colors.color_400}} />
        <Text style={styles.textSettingStyle}>Security setting</Text>
        <View style={{borderWidth: 0.5, borderColor: colors.color_400}} />
        <Text style={styles.textSettingStyle}>Change theme</Text>
        <View style={{borderWidth: 0.5, borderColor: colors.color_400}} />
        <Text style={styles.textSettingStyle}>Change Password</Text>
        <View style={{borderWidth: 0.5, borderColor: colors.color_400}} />
        <Btn
          action={handleSingout}
          btnState="enable"
          opacity={0.9}
          btnStyle={styles.buttonLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </Btn>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
