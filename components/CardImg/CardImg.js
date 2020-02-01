import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';

export const CardImg = ({ link }) => {
    return (
        <View style={styles.wrap}>
            <Image
                style={{
                    width: '100%', height: 300, resizeMode: 'contain'
                }}
                source={{ uri: link }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '50%',
        marginBottom: 500
    },
    wrap: {
        marginBottom: 20,
        marginHorizontal: 10
    }
});