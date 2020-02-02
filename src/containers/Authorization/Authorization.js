import React, { useState } from 'react';
import {
    StyleSheet,
    AsyncStorage,
    Text,
    View,
    Button,
    TextInput,
    Alert
} from 'react-native';

export const Authorization = props => {
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

        await AsyncStorage.setItem('authorization', 'true');
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


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#E5E5E5",
        paddingHorizontal: 40,
        paddingVertical: 20,
    },
    input: {
        marginBottom: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
        color: '#615151',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#515151',
    },
});