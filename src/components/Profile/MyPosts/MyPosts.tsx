import React, {
    ButtonHTMLAttributes,
    ChangeEvent,
    DetailedHTMLProps,
    FunctionComponent, ReactNode,
    RefObject,
    useState
} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostAC, AddPostActionType, AllActionsType, PostType, updateNewPostAC} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: AllActionsType) => void
}



const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map(p => <Post id = {p.id} message = {p.message} likesCount = {p.likesCount} />)

    const newPostElement = React.createRef<HTMLTextAreaElement>()


    const addPost = () => {
        // props.addPost()// вызывается от имени пропсов
        // props.dispatch({type: 'ADD-POST', postText: props.newPostText})
        props.dispatch(addPostAC(props.newPostText))
    }

    const postOnChange = () => {
        let text = newPostElement.current?.value
        // props.updateNewPostText(text)
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})// now newText in video
        let action = updateNewPostAC(text!)
        props.dispatch(action)// now newText in vide
    }

    return (
        <div className = {s.postsBlock}>
            <h3>My posts</h3>
            <div className = {s.item}>
                <div>
                    <textarea ref = {newPostElement} onChange = {postOnChange} value = {props.newPostText} />
                </div>
                <div>
                    <button  onClick = {addPost}>Add post
                    </button>
                    <button>Remove</button>
                    {/*<Button onClick={addPost}>Add post</Button>*/}//from the example below
                </div>
            </div>
            <div className = {s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;


/* Vladimir's example

//all default native props for <button></button>
type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonVariant = 'primary' | 'secondary'

//additional props(local)

interface IProps extends DefaultButtonProps {
    children: ReactNode
    square?: boolean
    variant?: ButtonVariant
}


export const Button: FunctionComponent<IProps> = ({
                                                      variant = 'primary',
                                                      square,
                                                      children,
                                                      ...restProps
                                                  }) => {

    const cls = `${s.button} ${s[variant]}`

    return (
        <button className = {cls} {...restProps}>{children}</button>
    )
}
*/
