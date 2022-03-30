import React from 'react';
import NavPanel from "./NavPanel";

const Main = () => {
    return (
        <main className='main'>
            <NavPanel/>
            <article className="main__content">
                <ul className="content__links">
                    <li className="content__link">Profile</li>
                    <li className="content__link">Account</li>
                    <li className="content__link">Price Plans</li>
                </ul>
                <div className="content__profile">
                    <div className="profile__info">
                        info
                    </div>
                    <div className="profile__basic">
                        Basic Options
                    </div>
                    <div className="profile__notifications">
                        Notifications
                    </div>
                </div>
            </article>
        </main>
    );
};

export default Main;