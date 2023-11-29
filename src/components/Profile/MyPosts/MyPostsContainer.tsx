import React, {
    ButtonHTMLAttributes,
    ChangeEvent,
    DetailedHTMLProps,
    FunctionComponent, ReactNode,
    RefObject,
    useState
} from 'react';

import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStatetype} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {PostType} from "../../../redux/store";


export type mapStateToPropsType = {
    posts: PostType[]
    newPostText: string
}

export type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const mapStateToProps = (state: AppStatetype) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            let action = updateNewPostAC(text)
            dispatch(action)
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


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
