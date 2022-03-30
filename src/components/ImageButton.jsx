import React from 'react';
import {css} from "@emotion/react";

const ImageButton = ({img, onClick, alt, ...props}) => {
    return (
        <button
            css={css(`
            border: none;
            background-color: transparent;
            cursor: pointer;
            `)}
            onClick={onClick}
            {...props}
        >
            <img src={img} alt={alt}/>
        </button>
    );
};

export default ImageButton;