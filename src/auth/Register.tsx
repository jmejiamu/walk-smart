import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useForm} from '../hook/useForm';
import {userForm} from '../interface/models';
import {RootStacksParams} from '../Main/Main';
import TextInputForm from '../../.storybook/stories/Form/TextInputForm';
import ButtonComponent from '../../.storybook/stories/Button/Button';
import Alert from '../../.storybook/stories/Alert/Alert';
import {styles} from './styles';
import {EventCtx} from '../Context/EventContext';

interface Props extends StackScreenProps<RootStacksParams, 'Register'> {}

const Register = ({navigation}: Props) => {
  const {newAuth, auth} = useContext(EventCtx);
  const [isEmpty, setEmpty] = useState(false);

  const {onChange, checkEmptyField, cleanFormState, form} = useForm<userForm>({
    fullName: '',
    email: '',
    password: '',
  });

  const registration = () => {
    const isEmpty: boolean = checkEmptyField(form);
    if (!isEmpty) {
      newAuth('register', form);
      if (!auth.error) {
        setEmpty(false);
        cleanFormState();
      }
    }
    setEmpty(isEmpty);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View
        style={{
          padding: 2,
          justifyContent: 'space-around',
        }}>
        <View style={styles.logContainer}>
          <Image style={styles.logo} source={require('../assets/log.png')} />
        </View>
        <TextInputForm
          title="Full Name"
          textInputStyle={styles.input}
          textInputMeta={{
            value: form.fullName,
            onChangeText: val => onChange(val, 'fullName'),
          }}
        />
        <TextInputForm
          title="Email"
          textInputStyle={styles.input}
          textInputMeta={{
            value: form.email,
            autoCapitalize: 'none',
            onChangeText: val => onChange(val, 'email'),
          }}
        />
        <TextInputForm
          title="Password"
          textInputStyle={styles.input}
          textInputMeta={{
            value: form.password,
            secureTextEntry: true,
            onChangeText: val => onChange(val, 'password'),
          }}
        />
        <View style={styles.bottomContainer}>
          <ButtonComponent text="Register" onPress={registration} />
          <View style={{...styles.bottomInnerContainer, marginVertical: 10}}>
            <Text style={styles.doYouHaveAccount}>Do you have an account?</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Signin', {
                  error: true,
                  record: {
                    user_id: '',
                    username: '',
                    created: '',
                    fail: false,
                    token: '',
                  },
                })
              }
              style={{alignSelf: 'flex-end'}}>
              <Text> Sign in</Text>
            </TouchableOpacity>
          </View>
          {isEmpty && <Alert Message="Required fields are empty" />}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
