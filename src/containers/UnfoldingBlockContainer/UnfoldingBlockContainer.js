import React, { useState } from 'react';
import { UnfoldingBlock } from '../../components/UnfoldingBlock/UnfoldingBlock';


export const UnfoldingBlockContainer = ({ title, getContent }) => {
    const [isDisplay, setDisplay] = useState(false);

    return (
        <UnfoldingBlock
            title={title}
            toggleDisplay={() => setDisplay(!isDisplay)}
            isDisplay={isDisplay}
            getContent={getContent}
        />
    );
}


