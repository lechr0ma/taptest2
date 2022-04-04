import React from 'react';
import {css} from "@emotion/react";

const Hline = ({width}) => {
    return (
        <hr css={css(`
            width: ${width}%;
            min-height: 3px;
            background: #E4E7EB;
            border: none;
            margin: 0 auto;
            `)}/>
    );
};

export default Hline;