import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store

// (window as any).store = store

export type AppStatetype = ReturnType<typeof rootReducer>
export type StoreType = typeof store
export type DispatchType = typeof store.dispatch
