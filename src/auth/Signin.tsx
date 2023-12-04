import React, { useContext, useState } from "react";
import { Image, KeyboardAvoidingView, Platform, Text, View } from "react-native"
import { StackScreenProps } from '@react-navigation/stack';
import { RootStacksParams } from '../Main/Main';
import { styles } from "./styles";
import TextInputForm from "../../.storybook/stories/Form/TextInputForm";
import { TouchableOpacity } from "react-native-gesture-handler";
import ButtonComponent from "../../.storybook/stories/Button/Button";
import { userForm } from "../interface/models";
import { useForm } from "../hook/useForm";
import Alert from "../../.storybook/stories/Alert/Alert";
import { EventCtx } from "../Context/EventContext";

interface Props extends StackScreenProps<RootStacksParams, 'Signin'> { }

const Signin = ({ navigation }: Props) => {

	const { newAuth, auth } = useContext(EventCtx)
	const [isEmpty, setIsEmpty] = useState(false)

	const { form, onChange, checkEmptyField, cleanFormState } = useForm<userForm>({
		email: '',
		password: ''
	})

	const userSignin = () => {
		const isEmpty: boolean = checkEmptyField(form)
		if (!isEmpty) {
			newAuth("signin", form)
			if (!auth.error) {
				setIsEmpty(false)
				cleanFormState()
				navigation.navigate('Walkin', auth)
			}
		}
		setIsEmpty(isEmpty)
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}>
			<View style={{
				padding: 2,
				justifyContent: 'space-around',
			}}>
				<View style={styles.logContainer}>
					<Image
						style={styles.logo}
						source={require('../assets/log.png')}
					/>
				</View>
				<TextInputForm
					title="Email"
					textInputStyle={styles.input}
					textInputMeta={{
						value: form.email,
						autoCapitalize: 'none',
						onChangeText: val => onChange(val, 'email')
					}}
				/>
				<TextInputForm
					title="Password"
					textInputStyle={styles.input}
					textInputMeta={{
						value: form.password,
						secureTextEntry: true,
						onChangeText: val => onChange(val, 'password')
					}}
				/>
				<View style={styles.bottomContainer}>
					<ButtonComponent text="Signin" onPress={userSignin} />
					<View style={{ ...styles.bottomInnerContainer, marginVertical: 10 }}>
						<Text style={styles.doYouHaveAccount}>I do not you have an account!</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Register', {
							error: true,
							record: {
								user_id: "",
								username: "",
								created: "",
								fail: false,
								token: ""
							}
						})} style={{ alignSelf: 'flex-end' }}>
							<Text> Register </Text>
						</TouchableOpacity>
					</View>
					{isEmpty && <Alert Message='Required fields are empty' />}
				</View>
			</View>
		</KeyboardAvoidingView>
	)
}

export default Signin;