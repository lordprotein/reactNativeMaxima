import React from 'react';
import {
    View,
    Button
} from 'react-native';


export const UnfoldingBlock = ({ title, isDisplay, toggleDisplay, getContent }) => {
    return (
        <View>
            <Button
                title={title}
                onPress={toggleDisplay}
            />

            {isDisplay && getContent()}
        </View>
    );
}