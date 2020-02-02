import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { styles } from './styles';

const { main, button, button__text } = styles;

export const FindPanel = ({ findFilter, findAll, changeInput, currText }) => {

    return (
        <View style={main}>
            <TextInput
                style={styles.input}
                placeholder="Enter a number album"
                onChangeText={changeInput}
                keyboardType="numeric"
                value={currText}
            />

            <TouchableHighlight
                style={button}
                underlayColor="#F3A2A2"
                onPress={findFilter}
            >
                <Text style={button__text}>Find</Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={button}
                underlayColor="#F3A2A2"
                onPress={findAll}
            >
                <Text style={button__text}>All</Text>
            </TouchableHighlight>
        </View>
    );
}

