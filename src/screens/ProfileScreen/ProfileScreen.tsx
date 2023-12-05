import React, { useContext } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Avatar from '../../../.storybook/stories/Avatar/Avatar';
import Btn from '../../../.storybook/stories/Btn/Btn';
import TopTapNav from '../../navigation/TopTapNav/TopNav'
import { styles } from './styles';
import { EventCtx } from '../../Context/EventContext';

const ProfileScreen = () => {
	const { auth } = useContext(EventCtx)
	
	return (
		<SafeAreaView>
			<View style={styles.userContainer}>
				<Avatar />
				<Text style={styles.userText}>{`@${auth.record.username}`}</Text>
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
