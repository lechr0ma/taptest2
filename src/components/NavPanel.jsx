import React from 'react';
import dashboard from '../images/nav/outline-dashboard-24px.svg'
import support from '../images/nav/outline-contact_support-24px.svg'
import lock from '../images/nav/outline-lock_open-24px.svg'
import people from '../images/nav/outline-people_outline-24px.svg'
import photo from '../images/nav/outline-photo-24px.svg'
import basket from '../images/nav/outline-shopping_basket-24px.svg'
import textFields from '../images/nav/outline-text_fields-24px.svg'
import ovalPhoto from '../images/nav/Oval.png'
import Hline from "./UI/Hline";
import NavLink from "./UI/NavLink";


const NavPanel = () => {
    return (
        <nav className="main__nav">
            <div className="nav__title">
                <img src={ovalPhoto} alt="Profile" className="title__image"/>
                <p className="title__name">
                    Roman Kutepov
                </p>
                <p className="title__position">
                    Brain Director
                </p>
            </div>
            <Hline width={88}/>
            <ul className="nav__links">
                <NavLink
                    image={dashboard}
                    title='Dashboard'
                    link='#'
                />
                <NavLink
                    image={people}
                    title='Users'
                    link='#'
                />
                <NavLink
                    image={basket}
                    title='Products'
                    link='#'
                />
                <NavLink
                    image={lock}
                    title='Authentication'
                    link='#'
                />
                <NavLink
                    image={textFields}
                    title='Typography'
                    link='#'
                />
                <NavLink
                    image={photo}
                    title='Icons & Images'
                    link='#'
                />
            </ul>
            <Hline width={88}/>
            <div className="nav__support">
                <p className="support__title">Support</p>
                <NavLink
                    image={support}
                    title='Support'
                    link='#'
                />
            </div>
        </nav>
    );
};

export default NavPanel;