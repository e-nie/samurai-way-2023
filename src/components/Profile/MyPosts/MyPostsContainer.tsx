import React, {
    ButtonHTMLAttributes,
    ChangeEvent,
    DetailedHTMLProps,
    FunctionComponent, ReactNode,
    RefObject,
    useState
} from 'react';

import {DispatchType, StoreType} from "../../../redux/redux-store";
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type MyPostsContainerPropsType = {
   dispatch:DispatchType
    profilePage: any

}


const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
    const addPost = () => {
        props.dispatch(addPostAC(props.profilePage.newPostText))
    }

    const onPostChange = (text: string) => {
        let action = updateNewPostAC(text)
        props.dispatch(action)// now newText in video
    }

    return (
        <MyPosts updateNewPostText = {onPostChange}
                 addPost={addPost}
                 posts = {props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}       />
    );
}

export default MyPostsContainer;


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
