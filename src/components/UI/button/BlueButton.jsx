import React from 'react';
import {css} from "@emotion/react";

const BlueButton = ({children, onClick}) => {
    return (
        <button
            css={css(`
                box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
                border-radius: 4px;
                border: none;
                cursor: pointer;
                background: #1665D8;
                color: #fff;
                width: 152px;
                height: 40px;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                letter-spacing: 1.25px;
                text-transform: uppercase;
                cursor: pointer;
                &:hover{
                    background: rgba(98, 2, 238, 0.0001);
                    border: 1px solid rgba(0, 0, 0, 0.12);
                    color: #1665D8;
                }
            `)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default BlueButton;