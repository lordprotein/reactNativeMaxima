import React from 'react';
import {
    View,
    TextInput,
} from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../CustomButton/CustomButton';


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

            <CustomButton
                title="Find"
                action={findFilter}
            />

            <CustomButton
                title="All"
                action={findAll}
            />
        </View>
    );
}

