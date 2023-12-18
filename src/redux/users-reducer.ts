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
}


export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>

export type UserActionsType =
    | setUsersActionType
    | UnfollowActionType
    | FollowActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2
}

export const usersReducer = (state = initialState, action: UserActionsType) => {

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

            return {...state, totalUsersCount:action.count}
        }
        default:
            return state
    }
}
// followAC
// unfollowAC
export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, count:totalUsersCount} as const)

