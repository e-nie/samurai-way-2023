import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export let store = createStore(rootReducer)


// (window as any).store = store

export type AppStatetype = ReturnType<typeof rootReducer>
export type StoreType = typeof store
export type DispatchType = typeof store.dispatch
