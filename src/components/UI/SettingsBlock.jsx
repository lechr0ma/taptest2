import React from 'react';
import Hline from "./Hline";
import {css} from "@emotion/react";

const SettingsBlock = ({title, description, children}) => {
    let styleBlock = css(`
            position: relative;
            z-index: 2;
            background: #FFFFFF;
            border: 1px solid rgba(63, 63, 68, 0.005);
            box-shadow: 0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15);
            border-radius: 4px;
            margin-bottom: 24px;
    `)
    let styleTitle = css(`
            padding: 25px 24px;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: -0.05px;
            color: #3A3B3F;
            & span{
              margin-left: 16px;
              font-weight: 300;
              font-size: 14px;
              line-height: 16px;
              color: #66788A;
            }
            @media screen and (max-width: 768px){
              padding: 25px 10px;
              & span{
                display: block;
                margin: 10px 0 0 0;
              }
            }
    `)
    return (
        <div css={styleBlock}>
            <div css={styleTitle}>
                {title}
                <span>{description}</span>
            </div>
            <Hline width={100}/>
            {children}
        </div>
    );
};

export default SettingsBlock;