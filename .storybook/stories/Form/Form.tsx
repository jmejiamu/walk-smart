import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TextInputForm from './TextInput/TextInputForm';
import { useForm } from "./hook/useForm";
import { colors } from '../../../src/theme';

const Form = () => {
    const {form, onChage,} = useForm({
        fullName: '',
        email: '',
        password:''
    })
    console.log(form);
    return (
        <SafeAreaView style={styles.container}>
            <TextInputForm
                title='Full Name'
                textInputStyle={{color:'#fff', paddingLeft: 12}}
                TextInputMeta={{
                    autoCapitalize: 'words',
                    onChangeText: (value) => onChage(value, 'fullName')
                }}
            />
            <TextInputForm
                title='Email'
                textInputStyle={{color:'#fff', paddingLeft: 12}}
                TextInputMeta={{
                    autoCapitalize: 'words',
                    autoComplete: 'email',
                    keyboardType: 'email-address',
                    onChangeText: (value) => onChage(value, 'email')
                }}
            />
            <TextInputForm
                title='Password'
                textInputStyle={{color:'#fff', paddingLeft: 12}}
                TextInputMeta={{
                    secureTextEntry:true,
                    onChangeText: (value) => onChage(value, 'password')
                }}
            />
        </SafeAreaView>
    )
}
export default Form;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color_200,
        justifyContent: 'center',
    }
})