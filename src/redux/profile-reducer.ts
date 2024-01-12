import {AllActionsType, PostType, ProfilePageType, StateType} from "./store";


export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>
export type SetUserProfileType = ReturnType<typeof setUserProfile>


type ProfileContactsType = {
    github: string
    vk: string,
    facebook: string
    instagram: string
    twitter: string,
    website: string
    youtube: string
    mainLink: string
}

type ProfilePhotosType = {
    small: (string)
    large: string
}

export type UserProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ProfileContactsType
    photos: ProfilePhotosType
}


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE '


let initialState = {
    posts: [
        {id: 1, message: 'Hi! How Are you? ', likesCount: 5},
        {id: 2, message: 'It\s my first post', likesCount: 7},
        {id: 3, message: 'Wuhu!', likesCount: 100},
        {id: 4, message: 'Ku-ku', likesCount: 3},
    ],
    newPostText: 'IT-Kamasutra',
    profile: null
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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}


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

export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
