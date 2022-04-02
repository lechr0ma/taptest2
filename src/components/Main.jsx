import React from 'react';
import NavPanel from "./NavPanel";
import Hline from "./Hline";
import profilePhoto from '../images/main/profile.png'
import SettingsInput from "./SettingsInput";
import BlueButton from "./BlueButton";
import WhiteButton from "./WhiteButton";
import ContentLinks from "./ContentLinks";

const Main = () => {
    function getBurger(e) {
        e.target.classList.toggle('active')
        e.target.parentNode.children[0].classList.toggle('active')
    }
    return (
        <main className='main'>
            <NavPanel/>
            <div onClick={(event => getBurger(event))} className="nav__burger">
                <span/>
            </div>
            <article className="main__content">
                <ContentLinks/>
                <Hline width={100}/>
                <div className="content__profile">
                    <div className="profile__left">
                        <div className="profile__info">
                            <div className="profile__title">
                                <p className="profile__name">
                                    Adrian Stefan
                                </p>
                                <p className="profile__location">
                                    Rm. Valcea, Romania
                                </p>
                                <p className="profile__time">
                                    4:32PM (GMT-4)
                                </p>
                            </div>
                            <img src={profilePhoto} alt="Profile"/>
                        </div>
                        <Hline width={100}/>
                        <div className="profile__buttons">
                            <label className="profile__upload">
                                UPLOAD PICTURE
                                <input type="file" accept='image/jpeg,image/png'/>
                            </label>
                            <button className="profile__remove">
                                REMOVE PICTURE
                            </button>
                        </div>
                    </div>
                    <div className="profile__right">
                        <div className="profile__basic">
                            <div className="basic__title">
                                Basic Profile
                                <span>The information can be edited from your profile page</span>
                            </div>
                            <Hline width={100}/>
                            <div className="basic__inputs">
                                <SettingsInput
                                    hint='Please specify the first name'
                                    type='text'
                                    placeholder='First Name'
                                />
                                <SettingsInput
                                    hint='Please specify the last Name'
                                    type='text'
                                    placeholder='Last Name'
                                />
                                <SettingsInput
                                    hint='Please specify email'
                                    type='email'
                                    placeholder='E-mail'
                                />
                                <SettingsInput
                                    hint='Please specify your phone number'
                                    type='tel'
                                    placeholder='Phone'
                                />
                                <SettingsInput
                                    hint='Please specify your country'
                                    type='text'
                                    placeholder='Country'
                                />
                                <SettingsInput
                                    hint='Please specify your city'
                                    type='text'
                                    placeholder='City'
                                />
                            </div>
                            <Hline width={100}/>
                            <div className="basic__save">
                                <BlueButton>
                                    SAVE SETTINGS
                                </BlueButton>
                            </div>
                        </div>
                        <div className="profile__notifications">
                            <div className="basic__title">
                                Notifications
                                <span>Manage the notifications emailing</span>
                            </div>
                            <Hline width={100}/>
                            <div className="notifications__inputs">
                                <div className="notifications__notifications">
                                    <p className='notifications__title'>Notifications</p>
                                    <label className='checkbox__label'>
                                        <input type="checkbox" className='checkbox__input'/>
                                        <span className='checkbox__title'>Email</span>
                                    </label>
                                    <label className='checkbox__label'>
                                        <input type="checkbox" className='checkbox__input'/>
                                        <span className='checkbox__title'>Push notifications</span>
                                    </label>
                                    <label className='checkbox__label'>
                                        <input type="checkbox" className='checkbox__input'/>
                                        <span className='checkbox__title'>Text Messages</span>
                                    </label>
                                    <label className='checkbox__label'>
                                        <input type="checkbox" className='checkbox__input'/>
                                        <span className='checkbox__title'>Phone Calls</span>
                                    </label>
                                </div>
                                <div className="notifications__messages">
                                    <p className='notifications__title'>Messages</p>
                                    <label className='checkbox__label'>
                                        <input type="checkbox" className='checkbox__input'/>
                                        <span className='checkbox__title'>Email</span>
                                    </label>
                                    <label className='checkbox__label'>
                                        <input type="checkbox" className='checkbox__input'/>
                                        <span className='checkbox__title'>Push notifications</span>
                                    </label>
                                    <label className='checkbox__label'>
                                        <input type="checkbox" className='checkbox__input'/>
                                        <span className='checkbox__title'>Text Messages</span>
                                    </label>
                                </div>
                            </div>
                            <Hline width={100}/>
                            <div className="basic__save">
                                <WhiteButton>
                                    SAVE
                                </WhiteButton>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default Main;