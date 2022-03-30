import React from 'react';
import {css} from "@emotion/react";

const Hline = () => {
    return (
        <hr css={css(`
            width: 88%;
            height: 3px;
            background: #E4E7EB;
            border: none;
            margin: 0 auto;
            `)}/>
    );
};

export default Hline;