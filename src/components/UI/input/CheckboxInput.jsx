import React from 'react';
import {css} from "@emotion/react";
import blank from '../../../images/main/checkbox_blank.svg'
import checked from '../../../images/main/checkbox_checked.svg'


const CheckboxInput = ({body}) => {
    let styleSpan = css(`
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.15px;
                color: rgba(0, 0, 0, 0.6);
                margin-left: 27px;
                &:before{
                    content: "";
                    background-image: url("${blank}");
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    position: absolute;
                    left: 0;
                    top: 3px;
                    }
                &:after{
                    content: '';
                    background-image: url("${checked}");
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    position: absolute;
                    left: 0;
                    top: 3px;
                    opacity: 0;
                    transition: opacity .2s;
                }
            `)
    let styleLabel = css(`
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.15px;
                color: rgba(0, 0, 0, 0.6);
                margin-bottom: 16px;
                position: relative;
                display: flex;
                align-items: center;
                cursor: pointer;         
                `)
    return (

        <label css={styleLabel}>
            <input
                type="checkbox"
                css={css(`
                display: none;
                &:checked +.css-${styleSpan.name}:after{
                    opacity: 1;
                }
                `)}
            />
            <span css={styleSpan}>{body}</span>
        </label>


    );
};

export default CheckboxInput;