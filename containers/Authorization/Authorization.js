import React, { useState } from 'react';
import {
    StyleSheet,
    AsyncStorage,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

export const Authorization = props => {
    const [inputText, setInputText] = useState('');


    const onChangeInput = text => {
        setInputText(text);
    }


    const _signInAsync = async () => {
        if (inputText !== 'admin') return;

        await AsyncStorage.setItem('userTokin', inputText);
        props.navigation.navigate('Images');
        
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
                title="Log in"
                onPress={_signInAsync}
            />
            <TextInput
                style={{ borderWidth: 1 }}
                onChangeText={text => onChangeInput(text)}
            />
        </View>
    )
}