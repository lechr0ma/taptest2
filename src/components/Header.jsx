import React from 'react';
import ImageButton from "./ImageButton";
import logo from '../images/header/logo.svg'
import alarm from '../images/header/outline-notifications-24px.svg'
import logOut from '../images/header/outline-exit_to_app-24px.svg'
import free from '../images/header/free.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'>
                <img src={logo} alt="Logo"/>
                <span>Devias Kit</span>
            </div>
            <div className='header__advert'>
                <img src={free} alt="Free"/>
                <span className='advert__title'>
                    See our PRO version for more design components & coded in React follow this link:&nbsp;
                    <a className='advert__link' href="https://devias.io/products/devias-kit-pro">
                           https://devias.io/products/devias-kit-pro
                    </a>
                </span>

            </div>
            <div className='header__buttons'>
                <ImageButton img={alarm} alt='Notifications'/>
                <ImageButton img={logOut} alt='Log out'/>
            </div>
        </header>
    );
};

export default Header;