import React from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/profile-reducer";
import {ProfilePageType} from "../../../redux/store";
import Preloader from "../../common/Preloader/Preloader";
import ava from '../../../assets/images/ava.jpeg'


const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader />
    }

    const testIsPhotos = props.profile?.photos?.small ?? ava
    return (
        <div>
            <div>
                <img className = {s.mainPhoto}
                     src = {testIsPhotos}
                />
            </div>
            <div className = {s.descriptionBlock}>
                <img src = {ava} alt = '' className = {s.ava} />
                <span className = {s.avaName}>Shershavochka</span>
            </div>

        </div>
    )
        ;
};

export default ProfileInfo;
