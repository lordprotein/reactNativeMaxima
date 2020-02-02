import React, { useState } from 'react';
import {
    AsyncStorage,
    View,
    Button,
    TextInput,
    Alert
} from 'react-native';
import { styles } from './styles';


export const LoginScreen = props => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


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
                placeholder="login"
                value={login}
            />
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeInput(text, setPassword)}
                secureTextEntry={true}
                placeholder="password"
                value={password}
            />
            <Button
                title="Log in"
                onPress={_signInAsync}
            />
        </View>
    )
}

