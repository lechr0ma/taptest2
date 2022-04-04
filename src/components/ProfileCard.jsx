import React from 'react';
import profilePhoto from "../images/main/profile.png";
import Hline from "./UI/Hline";

const ProfileCard = () => {
    return (
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
    );
};

export default ProfileCard;