import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "./../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map(p => <Post id = {p.id} message = {p.message} likesCount = {p.likesCount} />)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
debugger
        props.addPost()// вызывается от имени пропсов
    }

    const postOnChange = () => {
        let text = newPostElement.current?.value
        if (typeof text === "string") {
            props.updateNewPostText(text)
        }
    }

    return (
        <div className = {s.postsBlock}>
            <h3>My posts</h3>
            <div className = {s.item}>
                <div>
                    <textarea ref = {newPostElement} onChange = {postOnChange} value = {props.newPostText} />
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
