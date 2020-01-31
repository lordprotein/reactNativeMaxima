import React, { useState } from 'react';
import { View, Button } from 'react-native';


export const UnfoldingBlock = ({ title, getContent }) => {
    const [isDisplay, setDisplay] = useState(false);

    return (
        <View>
            <Button
                title={title}
                onPress={() => setDisplay(!isDisplay)}
            />
            {isDisplay && getContent()}
        </View>
    );
}

