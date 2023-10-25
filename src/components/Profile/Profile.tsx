import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";
import {ProfilePageType} from '../../redux/state'




export type ProfilePropsType = {
    state:ProfilePageType
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}  />
        </div>
    );
};

export default Profile;
