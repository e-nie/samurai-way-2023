import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "./../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[]
}
const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map(p => <Post id = {p.id} message = {p.message} likesCount = {p.likesCount} />)

    return (
        <div className = {s.postsBlock}>
            <h3>My posts</h3>
            <div className = {s.item}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className = {s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
