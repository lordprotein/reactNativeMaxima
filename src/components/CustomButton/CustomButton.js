import React from 'react';
import {
    TouchableHighlight,
    Text
} from 'react-native';


export const CustomButton = ({ title, action }) => {
    return (

        <TouchableHighlight
            style={{
                width: '100%',
                backgroundColor: '#2296f3',
                borderWidth: 1,
                borderColor: '#1071BF',
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            underlayColor='#1071BF'
            onPress={action}
        >
            <Text style={{ color: '#fff' }}>{title}</Text>
        </TouchableHighlight>

    );
}