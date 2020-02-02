import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { styles } from './styles';


export const CardImg = ({ title, link }) => {
    return (
        <View style={styles.wrap}>
            <Image
                style={istyles.mage}
                source={{ uri: link }}
            />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

