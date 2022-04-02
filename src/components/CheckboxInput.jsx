import React from 'react';
import {css} from "@emotion/react";

const CheckboxInput = ({body, }) => {
    return (
        <div css={css(`
            display: flex;
            align-items: center;
        `)}>
            <label css={css(`
                display: inline-block;
                position: relative;
                width: 18px;
                height: 18px;
                border: 2px solid #425A70;
                &::before{
                content: "";
                position: absolute;
                display: block;
                width: 10px;
                height: 10px;
                background: teal;
                top: 0;
                opacity: 0;
                }
                & + .checkbox:checked + &::before{
                opacity: 1;
                }
                `)}>
                <input type="checkbox" className='checkbox'/>
                <span css={css(`
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.15px;
                color: rgba(0, 0, 0, 0.6);
                margin-left: 10px;
            `)}>{body}</span>
            </label>

        </div>
    );
};

export default CheckboxInput;