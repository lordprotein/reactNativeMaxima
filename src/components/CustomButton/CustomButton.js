import React from 'react';
import {
    TouchableHighlight,
    Text
} from 'react-native';
import { styles } from './styles';


export const CustomButton = ({ title, action }) => {
    return (
        <TouchableHighlight
            style={styles.button}
            underlayColor='#1071BF'
            onPress={action}
        >
            <Text style={{ color: '#fff' }}>{title}</Text>
        </TouchableHighlight>

    );
}