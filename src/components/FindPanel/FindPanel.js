import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight
} from 'react-native';
import { styles } from './styles';


export const FindPanel = ({ findFilter, findAll, changeInput, currText }) => {

    return (
        <View style={styles.main}>
            <TextInput
                style={styles.input}
                placeholder="Enter a number album"
                onChangeText={changeInput}
                keyboardType="numeric"
                value={currText}
            />

            <TouchableHighlight
                style={styles.button}
                underlayColor="#F3A2A2"
                onPress={findFilter}
            >
                <Text style={styles.button__text}>Find</Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.button}
                underlayColor="#F3A2A2"
                onPress={findAll}
            >
                <Text style={styles.button__text}>All</Text>
            </TouchableHighlight>
        </View>
    );
}

