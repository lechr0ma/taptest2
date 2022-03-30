import React from 'react';
import dashboard from '../images/nav/outline-dashboard-24px.svg'
import support from '../images/nav/outline-contact_support-24px.svg'
import lock from '../images/nav/outline-lock_open-24px.svg'
import people from '../images/nav/outline-people_outline-24px.svg'
import photo from '../images/nav/outline-photo-24px.svg'
import basket from '../images/nav/outline-shopping_basket-24px.svg'
import textFields from '../images/nav/outline-text_fields-24px.svg'
import ovalPhoto from '../images/nav/Oval.png'
import Hline from "./Hline";


const NavPanel = () => {
    return (
        <nav className="main__nav">
            <div className="nav__title">
                <img src={ovalPhoto} alt="Profile photo" className="title__image"/>
                <p className="title__name">
                    Roman Kutepov
                </p>
                <p className="title__position">
                    Brain Director
                </p>
            </div>
            <Hline/>
            <ul className="nav__links">
                <li className="nav__link">
                    <img src={dashboard} alt="Dashboard"/>
                    Dashboard
                </li>
                <li className="nav__link">
                    <img src={people} alt="People"/>
                    Users
                </li>
                <li className="nav__link">
                    <img src={basket} alt="Basket"/>
                    Products
                </li>
                <li className="nav__link">
                    <img src={lock} alt="Lock"/>
                    Authentication
                </li>
                <li className="nav__link">
                    <img src={textFields} alt="Text"/>
                    Typography
                </li>
                <li className="nav__link">
                    <img src={photo} alt="Icons"/>
                    Icons & Images
                </li>
            </ul>
            <Hline/>
            <div className="nav__support">
                <p className="support__title">Support</p>
                <div className="nav__link support__link">
                    <img src={support} alt="Support"/>
                    Support
                </div>
            </div>
        </nav>
    );
};

export default NavPanel;