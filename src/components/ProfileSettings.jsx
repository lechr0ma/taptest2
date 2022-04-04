import React from 'react';
import Hline from "./UI/Hline";
import SettingsInput from "./UI/input/SettingsInput";
import BlueButton from "./UI/button/BlueButton";
import WhiteButton from "./UI/button/WhiteButton";
import SettingsBlock from "./UI/SettingsBlock";
import CheckboxInput from "./UI/input/CheckboxInput";

const ProfileSettings = () => {
    return (
        <div className="profile__right">
            <SettingsBlock
                title='Basic Profile'
                description='The information can be edited from your profile page'
            >
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
            </SettingsBlock>
            <SettingsBlock
                title='Notifications'
                description='Manage the notifications emailing'
            >
                <div className="notifications__inputs">
                    <div className="notifications__notifications">
                        <p className='notifications__title'>Notifications</p>
                        <CheckboxInput body='Email'/>
                        <CheckboxInput body='Push notifications'/>
                        <CheckboxInput body='Text Messages'/>
                        <CheckboxInput body='Phone Calls'/>
                    </div>
                    <div className="notifications__messages">
                        <p className='notifications__title'>Messages</p>
                        <CheckboxInput body='Email'/>
                        <CheckboxInput body='Push notifications'/>
                        <CheckboxInput body='Text Messages'/>
                    </div>
                </div>
                <Hline width={100}/>
                <div className="basic__save">
                    <WhiteButton>
                        SAVE
                    </WhiteButton>
                </div>
            </SettingsBlock>
        </div>
    );
};

export default ProfileSettings;