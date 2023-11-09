import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../hook/useForm';
import { useFetch } from '../hook/useFetch';
import {  Auth, userForm } from '../interface/models';
import { RootStacksParams } from '../Main/Main';
import TextInputForm from '../../.storybook/stories/Form/TextInputForm';
import ButtonComponent from '../../.storybook/stories/Button/Button';
import { styles } from './styles';



interface Props extends StackScreenProps<RootStacksParams, 'Register'> { }

const Register = ({ navigation }: Props) => {

	const { data, fetcheer } = useFetch<Auth>({
		error: true,
		record:{
			created:'',
			fail: true,
			token:'',
			user_id:'',
			username:''
		}
	})

	const { onChange, form } = useForm<userForm>({
		fullName: '',
		email: '',
		password: '',
	});

	const registration = () => {
		fetcheer('http://localhost:8080/api-v1/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		})

	};

	useEffect(() => {
		// setData() // this will be change when add state management
		if (!data.error) {
			navigation.navigate('Walkin', data)
		}

	}, [data])

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.container}>
			<Text style={styles.logo}> LOGO </Text>
				<TextInputForm
					title="Full Name"
					textInputStyle={styles.input}
					textInputMeta={{ onChangeText: val => onChange(val, 'fullName') }}
				/>

				<TextInputForm
					title="Email"
					textInputStyle={styles.input}
					textInputMeta={{
						autoCapitalize: 'none',
						onChangeText: val => onChange(val, 'email')
					}}
				/>
				<TextInputForm
					title="Password"
					textInputStyle={styles.input}
					textInputMeta={{
						secureTextEntry: true,
						onChangeText: val => onChange(val, 'password'),
					}}
				/>
				<View style={styles.bottomContainer}>
					<ButtonComponent text="Register" onPress={registration} />
					<View style={{ ...styles.bottomInnerContainer, marginVertical: 10 }}>
						<Text style={styles.doYouHaveAccount}>Do you have an account?</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Signin', data)} style={{ alignSelf: 'flex-end' }}>
							<Text> Sign in</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Register;
