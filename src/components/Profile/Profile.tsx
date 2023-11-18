import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AllActionsType, PostType} from "../../redux/store";
import {ProfilePageType} from '../../redux/store'


export type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch:(action:AllActionsType)=> void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.profilePage.posts}
                     newPostText = {props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;
