import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DispatchType, store, StoreType} from "../../redux/redux-store";
import {AllActionsType, ProfilePageType} from '../../redux/store'
import MyPostsContainer from "./MyPosts/MyPostsContainer";



export type ProfilePropsType = {
    dispatch:DispatchType
    profilePage: ProfilePageType

}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer dispatch = {props.dispatch} profilePage={props.profilePage}
            />
        </div>
    );
};

export default Profile;
