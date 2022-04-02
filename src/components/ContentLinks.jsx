import React, {useState} from 'react';
import BlueLine from "./BlueLine";

const ContentLinks = () => {
    const [linePosition, setPosition] = useState(-12);
    return (
        <ul className="content__links">
            <li className="content__link">
                <button onClick={()=>setPosition(-12)} className='content__button'>
                    Profile
                </button>
            </li>
            <li className="content__link">
                <button onClick={()=>setPosition(95)} className='content__button'>
                    Account
                </button>
            </li>
            <li className="content__link">
                <button onClick={()=>setPosition(219)} className='content__button'>
                    Price Plans
                </button>
            </li>
            <BlueLine left={linePosition}/>
        </ul>
    );
};

export default ContentLinks;