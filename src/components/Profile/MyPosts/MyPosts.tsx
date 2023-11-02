import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "./../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[]
    addPost: (message: string) => void
}
const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map(p => <Post id = {p.id} message = {p.message} likesCount = {p.likesCount} />)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let text = newPostElement.current?.value
        if (typeof text === "string") {
            props.addPost(text)
            if (newPostElement.current) {
                newPostElement.current.value = ''
            }
        }

        // if(newPostElement.current) {
        //     props.addPost(text)
        // }

    }

    return (
        <div className = {s.postsBlock}>
            <h3>My posts</h3>
            <div className = {s.item}>
                <div>
                    <textarea ref = {newPostElement}></textarea>
                </div>
                <div>
                    <button onClick = {addPost}>Add post
                    </button>
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
