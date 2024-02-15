import {usersAPI} from "api/api";
import {Dispatch} from "redux";

type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    name: string
    status: string
    location: LocationType
    photos: { small: string, large: string }

}


export type InitialStateType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}


export type FollowSuccessActionType = ReturnType<typeof followSuccess>
export type UnfollowSuccessActionType = ReturnType<typeof unfollowSuccess>
export type setUsersActionType = ReturnType<typeof setUsers>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export type toggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>

export type UserActionsType =
    | setUsersActionType
    | UnfollowSuccessActionType
    | FollowSuccessActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingType
    | toggleFollowingProgressType

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    //крутилка:
    isFetching: false,
    // дизейбл кнопки follow/unfollow:
    followingInProgress: []
}

export const usersReducer = (state: InitialStateType = initialState, action: UserActionsType): InitialStateType => {

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
            return {...state, users: [...action.users, ...state.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {

            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}


//ACs
export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)

//thunks
export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch<UserActionsType>) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}

export const follow = (userId: number) => (dispatch: Dispatch<UserActionsType>) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.follow(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}


export const unfollow = (userId: number) => (dispatch: Dispatch<UserActionsType>) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unfollow(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}



