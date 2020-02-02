import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';




export const FindPanel = ({ toFind, getAll }) => {
    const [inputText, updateInputText] = useState('');


    const handleButton = (action, text = false) => {
        updateInputText('');
        action(text);
    }

    return (
        <View style={styles.main}>
            <TextInput
                style={styles.input}
                placeholder="Enter a number album"
                onChangeText={text => updateInputText(text)}
                keyboardType="numeric"
                value={inputText}
            />

            <TouchableHighlight
                style={styles.button}
                onPress={() => handleButton(toFind, inputText)}
                underlayColor="#F3A2A2"
            >
                <Text style={styles.button__text}>Find</Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.button}
                onPress={() => handleButton(getAll)}
                underlayColor="#F3A2A2"
            >
                <Text style={styles.button__text}>All</Text>
            </TouchableHighlight>
        </View>
    );
}


