import React, { useState } from 'react';
import { FindPanel } from '../../components/FindPanel/FindPanel';


export const FindPanelContainer = ({ getFilteredList, getAllList }) => {
    const [inputText, updateInputText] = useState('');


    const hadleButton = (action, text = false) => {
        updateInputText('');
        action(text);
    }


    return (
        <FindPanel
            findFilter={() => hadleButton(getFilteredList, inputText)}
            findAll={() => hadleButton(getAllList)}
            changeInput={text => updateInputText(text)}
            currText={inputText}
        />
    );
}
