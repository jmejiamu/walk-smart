import React from 'react';
import TextInputForm from '../../../.storybook/stories/Form/TextInputForm';
import ButtonComponent from '../../../.storybook/stories/Button/Button';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { userForm } from '../../interface/models';

interface Props {
  onChange: (value: string, field: keyof userForm) => void;
  onHandleSubmit: () => void;
  navigation: ()=> void;
}

const Registration = ({ onChange, onHandleSubmit, navigation }: Props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGO</Text>
      <TextInputForm
        title="Full Name"
        textInputStyle={styles.input}
        textInputMeta={{ onChangeText: val => onChange(val, 'fullName') }}
      />
      <TextInputForm
        title="Email"
        textInputStyle={styles.input}
        textInputMeta={{ 
          autoCapitalize:'none',
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
        <ButtonComponent text="Register" onPress={() => onHandleSubmit()} />
        <View style={{...styles.bottomInnerContainer, marginVertical: 10 }}>
          <Text style={styles.doYouHaveAccount}>Do you have an account?</Text>
          <TouchableOpacity onPress={navigation} style={{ alignSelf: 'flex-end' }}>
            <Text> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Registration;
