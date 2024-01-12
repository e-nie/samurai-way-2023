import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



export type ProfilePropsType = {
    // dispatch:DispatchType
    // profilePage: ProfilePageType

}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer  />
        </div>
    );
};

export default Profile;
