import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const CardImg = ({ title, link }) => {
    return (
        <View style={styles.wrap}>
            <Image
                style={styles.image}
                source={{ uri: link }}
            />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        marginBottom: 40,
        marginHorizontal: 10
    },
    image: {
        flex: 1,
        height: 300,
        resizeMode: 'contain'
    },
    text: {
        marginTop: 10,
        textAlign: "center",
        color: "#626262"
    },
});