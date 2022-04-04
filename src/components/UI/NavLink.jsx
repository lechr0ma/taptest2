import React from 'react';
import {css} from "@emotion/react";

const NavLink = ({image, title, link}) => {
    let style = css(`
                display: flex;
                align-items: center;
                min-width: 130px;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: -0.05px;
                color: #66788A;
                margin-top: 34px;
                cursor: pointer;
                text-decoration: none;
                & span{
                  margin-left: 8px;
                }`
    )
    return (
        <li css={css({listStyleType: "none"})}>
            <a
                css={style}
                href={link}>
                <img src={image} alt={title}/>
                <span>{title}</span>
            </a>
        </li>
    );
};

export default NavLink;