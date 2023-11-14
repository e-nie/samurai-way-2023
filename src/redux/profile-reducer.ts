import {AllActionsType, PostType, ProfilePageType, StateType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>

export const addPostAC = (postText: string) => {
    console.log('newText-add-post', postText)
    return {
        type: ADD_POST,
        postText: postText
    } as const
}

export const updateNewPostAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export const profileReducer = (state: ProfilePageType, action: AllActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {id: new Date().getTime(), message: action.postText, likesCount: 12}
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }

        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText
            return state
        }
        default:
            return state
    }
}


