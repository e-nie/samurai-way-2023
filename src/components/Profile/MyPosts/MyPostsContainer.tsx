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
import {StoreContext} from "../../../StoreContext";


type MyPostsContainerPropsType = {
    // dispatch: DispatchType
    // profilePage: any

}


const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {


    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostAC(state.profilePage.newPostText))
                }

                const onPostChange = (text: string) => {
                    let action = updateNewPostAC(text)
                    store.dispatch(action)// now newText in video
                }

                return <MyPosts updateNewPostText = {onPostChange}
                                addPost = {addPost}
                                posts = {store.getState().profilePage.posts}
                                newPostText = {store.getState().profilePage.newPostText} />
            }
        }
        </StoreContext.Consumer>
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
