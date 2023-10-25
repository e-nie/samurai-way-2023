import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../index";



export type ProfilePropsType = {
    posts:PostsType[]
}

const Profile:React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}  />
        </div>
    );
};

export default Profile;
