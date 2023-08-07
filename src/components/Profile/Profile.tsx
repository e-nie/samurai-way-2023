import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className = {s.content}>
            <div>
                <img
                    src = 'https://images.template.net/wp-content/uploads/2016/04/27051847/Cool-Nature-Wallpapaer-for-Download.jpg'
                    alt = '' />
            </div>
            <div>
                ava + description
            </div>
           <MyPosts />
        </div>
    );
};

export default Profile;
