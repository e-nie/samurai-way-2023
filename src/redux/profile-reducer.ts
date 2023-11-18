import {AllActionsType, PostType, ProfilePageType, StateType} from "./store";

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

let initialState = {
    posts: [
        {id: 1, message: 'Hi! How Are you? ', likesCount: 5},
        {id: 2, message: 'It\s my first post', likesCount: 7},
        {id: 3, message: 'Wuhu!', likesCount: 100},
        {id: 4, message: 'Ku-ku', likesCount: 3},
    ],
    newPostText: 'IT-Kamasutra.com'
}

export const profileReducer = (state: ProfilePageType = initialState, action: AllActionsType): ProfilePageType => {
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


