//State Type
import {authAPI} from "api/api";
import {Dispatch} from "redux";

export type InitialStateType = {
    id: string|null,
    email: string| null,
    login: string |null,
    isAuth: boolean
}
//AC types
export type setAuthUserDataType = ReturnType<typeof setAuthUserData>

//All Actions Types
export type UserActionsType =
    | setAuthUserDataType

//Constants
const SET_USER_DATA = 'SET_USER_DATA'

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

//Reducer
export const authReducer = (state: InitialStateType = initialState, action: UserActionsType): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA: {
            debugger
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}
//ACs
export const setAuthUserData = (id: string, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
} as const)


//thunk

export const getAuthUserData = () => (dispatch:Dispatch) => {
    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data
               dispatch(setAuthUserData(id, email, login) )               }

        })
}

