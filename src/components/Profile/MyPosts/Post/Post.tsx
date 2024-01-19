import React from 'react';
import s from './Post.module.css'
import ava from '../../../../assets/images/ava.jpeg'

type PostPropsType = {
    id:number
    message:string
    likesCount:number

}

const Post = (props: PostPropsType) => {

    return (
        <div className = {s.item}>
            <img
                // src={ava}
                src = 'https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg'
                alt = '' />
            {props.message} {}
            {props.likesCount}
            <div>
                <span>Like</span>
            </div>
         </div>
    );
};

export default Post;
