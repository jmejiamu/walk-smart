import React, {useState, useEffect} from 'react';
import Registration from '../screens/Registration/Registration';
import {userForm, apiResponse} from './interfaces/interfaces';
import BottomNav from '../navigation/BottomNav/BottomNav';
import {useForm} from '../hook/useForm';
import {View} from 'react-native';

const Auth = () => {
  const [auth, setAuth] = useState<apiResponse>();

  const {onChange, form} = useForm<userForm>({
    fullName: '',
    email: '',
    password: '',
  });

  const registration = async () => {
    try {
      const res = await fetch('http://localhost:3000/api-v1/register', {
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

  useEffect(() => {
    registration();
  }, []);

  return (
    <View style={{flex: 1}}>
      {auth?.error ? (
        <Registration onChange={onChange} onHandleSubmit={registration} />
      ) : (
        <BottomNav />
      )}
    </View>
  );
};

export default Auth;
