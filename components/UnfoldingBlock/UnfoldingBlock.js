import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';


export const UnfoldingBlock = ({ title, getContent }) => {
    const [isDisplay, setDisplay] = useState(false);

    return (
        <View>
            <Button
                style={styles.btn}
                title={title}
                onPress={() => setDisplay(!isDisplay)}
            />
            {isDisplay && getContent()}
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#000',
        color: 'red'
    }
});

