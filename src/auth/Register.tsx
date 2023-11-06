import React, { useState } from 'react';
import Registration from '../screens/Registration/Registration';
import { useForm } from '../hook/useForm';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStacksParams } from '../Main/Main';
import { Auth, userForm } from '../interface/models';



interface Props extends StackScreenProps<RootStacksParams, 'Register'> { }

const Register = ({ navigation }: Props) => {
  const [auth, setAuth] = useState<Auth>({
    error: true,
    record: {
      created: '',
      fail: true,
      token: '',
      user_id: '',
      username: ''
    }
  });

  const { onChange, form } = useForm<userForm>({
    fullName: '',
    email: '',
    password: '',
  });

  const navigationScreen = () => {
    navigation.navigate('Signin', {})
  }
  const registration = async () => {
    try {
      const res = await fetch('http://localhost:8080/api-v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      setAuth(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(auth);

  return (
    <View style={{ flex: 1 }}>
      <Registration onChange={onChange} onHandleSubmit={registration} navigation={navigationScreen} />
    </View>
  );
};

export default Register;