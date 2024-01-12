import React from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/profile-reducer";
import {ProfilePageType} from "../../../redux/store";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props:any) => {
    if(!props.profile ) {
        return<Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src = 'https://images.template.net/wp-content/uploads/2016/04/27051847/Cool-Nature-Wallpapaer-for-Download.jpg'
                    alt = '' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.large} alt='profilePhoto'/>
                ava + description
            </div>

        </div>
    )
        ;
};

export default ProfileInfo;
