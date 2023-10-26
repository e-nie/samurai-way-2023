import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";
import {ProfilePageType} from '../../redux/state'




export type ProfilePropsType = {
    state:ProfilePageType
    addPost:(message:string)=> void
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} addPost={props.addPost} />
        </div>
    );
};

export default Profile;
