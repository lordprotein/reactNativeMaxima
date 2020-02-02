import React from 'react';
import { View } from 'react-native';
import { CustomButton } from '../CustomButton/CustomButton';


export const UnfoldingBlock = ({ title, isDisplay, toggleDisplay, getContent }) => {
    return (
        <View>
            <CustomButton
                title={title}
                action={toggleDisplay}
            />

            {isDisplay && getContent()}
        </View>
    );
}