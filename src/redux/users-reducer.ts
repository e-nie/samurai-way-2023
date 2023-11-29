import {AllActionsType, PostType, ProfilePageType, StateType} from "./store";


type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type InitialStateType = {
    users: UserType[]
}


export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>

export type setUsersActionType = ReturnType<typeof setUsersAC>
export type UserActionsType = | setUsersActionType | UnfollowActionType | FollowActionType


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState: InitialStateType = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        //     followed: false,
        //     fullName: 'Evchen',
        //     status: 'I am everywhere',
        //     location: {country: 'UK', city: 'Paris'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        //     followed: false,
        //     fullName: 'Ivonne',
        //     status: 'I am everywhere',
        //     location: {country: 'UK', city: 'London'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        //     followed: false,
        //     fullName: 'Connor',
        //     status: 'I am everywhere',
        //     location: {country: 'Germany', city: 'Bonn'}
        // }
    ]

}

export const usersReducer = (state = initialState, action: UserActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                // users: [...state.users] same as below with map
                users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        }

        case SET_USERS : {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)

