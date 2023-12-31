import {AllActionsType, PostType, ProfilePageType, StateType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>

export const addPostAC = () => {
    // console.log('newText-add-post', postText)
    return {
        type: ADD_POST,
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
    newPostText: 'IT-Kamasutra'
}

export const profileReducer = (state: ProfilePageType = initialState, action: AllActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {id: new Date().getTime(), message: state.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }

        }
        default:
            return state
    }
}


