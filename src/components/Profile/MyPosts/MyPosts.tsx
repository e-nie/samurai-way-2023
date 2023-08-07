import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export type MessageType = string

const MyPosts = () => {

    return (
        <div>
            My posts
            <div className = {s.item}>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>

            <div className = {s.posts}>
                <Post message={'Hi! How Are you? '} likeCount={5}/>
                <Post message={'It\s my first post'} likeCount={7}/>
            </div>
        </div>
    );
};

export default MyPosts;
