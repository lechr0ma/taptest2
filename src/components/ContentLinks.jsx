import React, {useState} from 'react';
import BlueLine from "./UI/BlueLine";

const ContentLinks = ({setFrame}) => {
    const [linePosition, setPosition] = useState(-12);

    function setPage(position, page) {
        setPosition(position);
        setFrame(page)
    }

    return (
        <ul className="content__links">
            <li className="content__link">
                <button onClick={() => setPage(-12, 1)} className='content__button'>
                    Profile
                </button>
            </li>
            <li className="content__link">
                <button onClick={() => setPage(95, 2)} className='content__button'>
                    Account
                </button>
            </li>
            <li className="content__link">
                <button onClick={() => setPage(219, 3)} className='content__button'>
                    Price Plans
                </button>
            </li>
            <BlueLine left={linePosition}/>
        </ul>
    );
};

export default ContentLinks;