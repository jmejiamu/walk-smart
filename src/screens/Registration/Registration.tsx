import TextInputForm from '../../../.storybook/stories/Form/TextInputForm';
import ButtonComponent from '../../../.storybook/stories/Button/Button';
import {Text, View, TouchableOpacity} from 'react-native';
import {userForm} from '../../auth/interfaces/interfaces';
import {styles} from './styles';
import React from 'react';

interface Props {
  onChange: (value: string, field: keyof userForm) => void;
  onHandleSubmit: () => void;
}

const Registration = ({onChange, onHandleSubmit}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGO</Text>
      <TextInputForm
        title="Full Name"
        textInputStyle={styles.input}
        textInputMeta={{onChangeText: val => onChange(val, 'fullName')}}
      />
      <TextInputForm
        title="Email"
        textInputStyle={styles.input}
        textInputMeta={{onChangeText: val => onChange(val, 'email')}}
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
        <ButtonComponent text="Register" onPress={() => onHandleSubmit()} />

        <View style={styles.bottomInnerContainer}>
          <Text style={styles.doYouHaveAccount}>Do you have an account?</Text>
          <TouchableOpacity style={{alignSelf: 'flex-end'}}>
            <Text> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Registration;
