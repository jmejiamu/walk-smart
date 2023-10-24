import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Avatar from '../../../.storybook/stories/Avatar/Avatar';
import Btn from '../../../.storybook/stories/Btn/Btn';
import TopTapNav from '../../navigation/TopTapNav/TopNav'
import { styles } from './styles';

const ProfileScreen = () => {
	return (
		<SafeAreaView>
			<View style={styles.userContainer}>
				<Avatar />
				<Text style={styles.userText}>@test</Text>
			</View>
			<View>
				<Btn
					btnState='enable'
					opacity={0.9}
					btnStyle={styles.buttonProfile}
				>
					<Text style={styles.buttonText}> Edit Profile </Text>
				</Btn>
			</View>
			<TopTapNav />
		</SafeAreaView>
	);
};

export default ProfileScreen;
