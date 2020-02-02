import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

const { wrap, image, text } = styles;


export const CardImg = ({ title, link }) => {
    return (
        <View style={wrap}>
            <Image
                style={image}
                source={{ uri: link }}
            />
            <Text style={text}>{title}</Text>
        </View>
    );
}

