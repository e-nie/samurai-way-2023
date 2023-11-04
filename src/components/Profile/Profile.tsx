import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";
import {ProfilePageType} from '../../redux/state'


export type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    newPostText: string
    updateNewPostText:(newText:string)=> void

}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.profilePage.posts}
                     newPostText = {props.newPostText}
                     addPost = {props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

export default Profile;
