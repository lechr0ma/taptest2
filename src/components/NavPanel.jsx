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
            <Hline width={88}/>
            <ul className="nav__links">
                <li className="nav__link">
                    <img src={dashboard} alt="Dashboard"/>
                    <span>Dashboard</span>
                </li>
                <li className="nav__link">
                    <img src={people} alt="People"/>
                    <span>Users</span>
                </li>
                <li className="nav__link">
                    <img src={basket} alt="Basket"/>
                    <span>Products</span>
                </li>
                <li className="nav__link">
                    <img src={lock} alt="Lock"/>
                    <span>Authentication</span>
                </li>
                <li className="nav__link">
                    <img src={textFields} alt="Text"/>
                    <span>Typography</span>
                </li>
                <li className="nav__link">
                    <img src={photo} alt="Icons"/>
                    <span>Icons & Images</span>
                </li>
            </ul>
            <Hline width={88}/>
            <div className="nav__support">
                <p className="support__title">Support</p>
                <div className="nav__link support__link">
                    <img src={support} alt="Support"/>
                    <span>Support</span>
                </div>
            </div>
        </nav>
    );
};

export default NavPanel;