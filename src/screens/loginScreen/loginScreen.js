import React, { useState } from 'react';
import {
    View,
    Button,
    TextInput,
    Alert
} from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/CustomButton/CustomButton';


export const LoginScreen = props => {
    const [login, setLogin] = useState(''),
        [password, setPassword] = useState('');


    const onChangeInput = (text, setNewState) => {
        setNewState(text);
    }


    const _signInAsync = async () => {
        if (login !== 'admin' || password !== 'admin') {
            Alert.alert('Incorrect login or password')
            setLogin('');
            setPassword('');
            return;
        };

        props.navigation.navigate('Images');
    }


    return (
        <View style={styles.main}>
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeInput(text, setLogin)}
                placeholder="login: admin"
                value={login}
            />
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeInput(text, setPassword)}
                secureTextEntry={true}
                placeholder="password: admin"
                value={password}
            />
            <CustomButton
                title="Log in"
                action={_signInAsync}
            />
        </View>
    )
}