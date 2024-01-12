import React from 'react';

import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";
import {ProfilePageType} from "../../redux/store";



export type ProfilePropsType = {
    // dispatch:DispatchType
    // profilePage: ProfilePageType
    profile: any

}

const Profile = (props: any) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer  />
        </div>
    );
};

export default Profile;
