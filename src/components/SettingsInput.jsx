import React from 'react';
import {css} from "@emotion/react";

const SettingsInput = ({type, placeholder, hint}) => {
    const hintCss = css(`
            &:before {
                content: '${placeholder}';
                display: inline-block;
                position: absolute;
                color: #1665D8;
                top: -165%;
                left: 26px;
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 0.4px;
                background: #fff;
                padding: 5px;
                opacity: 0;
             }
             &:after{
                content: '${hint}';
                display: inline-block;
                position: absolute;
                color: #1665D8;
                top: 200%;
                left: 28px;
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 0.4px;
                background: #fff;
                padding: 3px;
                opacity: 0;
             }
            `)
    return (
        <label
            css={css(`
            position: relative;
            `)}
        >
            <input
                css={css(`
                width: min(328px, 90%);
                height: 56px;
                padding: 16px;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                border: 1px solid rgba(0, 0, 0, 0.32);
                border-radius: 4px;
                margin: 12px;
                &:focus{
                     outline: none;
                     border: 2px solid #1665D8;
                     }
                &:focus + .css-${hintCss.name}:before {
                    opacity: 1;
                     }
                &:focus + .css-${hintCss.name}:after { 
                    opacity: 1;
                     }
                `)}
                type={type}
                placeholder={placeholder}
            />
            <span css={hintCss}/>
        </label>
    );
};

export default SettingsInput;