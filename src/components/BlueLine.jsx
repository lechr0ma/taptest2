import React from 'react';
import {css} from "@emotion/react";

const BlueLine = ({left}) => {
    return (
        <div
            css={css(`
            position: absolute;
            bottom: -2px;
            left: ${left}px;
            width: 80px;
            height: 3px;
            background-color: #1665D8;
            transition: left .5s;
            `)}
        />
    );
};

export default BlueLine;