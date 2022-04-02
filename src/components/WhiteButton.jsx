import React from 'react';
import {css} from "@emotion/react";

const WhiteButton = ({children, onClick}) => {
    return (
        <button
            css={css(`
            width: 120px;
            height: 40px;
            background: rgba(98, 2, 238, 0.0001);
            border: 1px solid rgba(0, 0, 0, 0.12);
            border-radius: 4px;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 1.25px;
            text-transform: uppercase;
            color: #1665D8;
            cursor: pointer;
            &:hover{
                background: #1665D8;
                color: #FFF;
            }
            `)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default WhiteButton;