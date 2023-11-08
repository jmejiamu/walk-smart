import React, { useEffect } from "react";
import { Text, View } from "react-native"
import { StackScreenProps } from '@react-navigation/stack';
import { RootStacksParams } from '../Main/Main';
import { styles } from "./styles";
import TextInputForm from "../../.storybook/stories/Form/TextInputForm";
import { TouchableOpacity } from "react-native-gesture-handler";
import ButtonComponent from "../../.storybook/stories/Button/Button";
import { Auth, userForm } from "../interface/models";
import { useForm } from "../hook/useForm";
import { useFetch } from "../hook/useFetch";

interface Props extends StackScreenProps<RootStacksParams, 'Signin'> { }

const Signin = ({ navigation }: Props) => {

	const { datas, fetcheer } = useFetch<Auth>({
		error: true,
		record: {
			created: '',
			fail: true,
			token: '',
			user_id: '',
			username: ''
		}
	})


	const { form, onChange } = useForm<userForm>({
		email: '',
		password: ''
	})

	const userSignin = () => {
		fetcheer('http://localhost:8080/api-v1/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form)
		})

	}

	useEffect(() => {
		// setCtx(data) // here is api context
		if (!datas.error) {
			navigation.navigate('Walkin', datas)
		}

	}, [datas])

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={styles.logo}> LOGO </Text>
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
						onChangeText: val => onChange(val, 'password')
					}}
				/>
				<View style={styles.bottomContainer}>
					<ButtonComponent text="Signin" onPress={userSignin} />
					<View style={{ ...styles.bottomInnerContainer, marginVertical: 10 }}>
						<Text style={styles.doYouHaveAccount}>I do not you have an account!</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Register', datas)} style={{ alignSelf: 'flex-end' }}>
							<Text> Register </Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	)
}

export default Signin;