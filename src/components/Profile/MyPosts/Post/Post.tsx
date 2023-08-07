import React from 'react';
import s from './Post.module.css'
import {MessageType} from "../MyPosts";

type PostPropsType = {
    message:string
    likeCount:number
}

const Post = (props: PostPropsType) => {

    return (
        <div className = {s.item}>
            <img
                src = 'https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg'
                alt = '' />
            {props.message} {}
            {props.likeCount}
            <div>
                <span>Like</span>
            </div>
         </div>
    );
};

export default Post;
