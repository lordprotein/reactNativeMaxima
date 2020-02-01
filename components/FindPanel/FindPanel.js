import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, Image, TouchableHighlight } from 'react-native';




export const FindPanel = ({ toFind, getAll }) => {
    const [inputText, updateInputText] = useState('');
    // console.log(inputText);

    const handleFind = () => {
        toFind(inputText);
        updateInputText('');
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
                onPress={handleFind}
                underlayColor="#F3A2A2"
            >
                <Text style={styles.button__text}>Find</Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.button}
                onPress={() => getAll()}
                underlayColor="#F3A2A2"
            >
                <Text style={styles.button__text}>All</Text>
            </TouchableHighlight>
        </View>

    );
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#B6B4B4',
        overflow: 'hidden'
    },
    input: {
        flex: 4,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
        color: '#515151',

    },
    button: {
        flex: 1,
        height: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderLeftColor: '#B6B4B4',

    },
    button__text: {
        color: '#626262',

    }
});
