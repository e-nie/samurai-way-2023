import {AddPostActionType,  UpdateNewPostActionType} from "./profile-reducer";
import { SendMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageBody: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}

export type StoreType = {
    _state: StateType
    getState: () => void
    _callSubscriber: (state: StateType) => void
    // _rerenderEntireTree: (state: StateType) => void
    // addPost: (postText:string) => void
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: AllActionsType) => void
}

export type AllActionsType = AddPostActionType
    | UpdateNewPostActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType

export let store = {
    _state:
        {
            profilePage: {
                posts: [
                    {id: 1, message: 'Hi! How Are you? ', likesCount: 5},
                    {id: 2, message: 'It\s my first post', likesCount: 7},
                    {id: 3, message: 'Wuhu!', likesCount: 100},
                    {id: 4, message: 'Ku-ku', likesCount: 3},
                ],
                newPostText: 'IT-Kamasutra.com'
            },
            dialogsPage: {
                dialogs: [
                    {id: 1, name: 'Evchen'},
                    {id: 2, name: 'Aloise'},
                    {id: 3, name: 'Florence'},
                    {id: 4, name: 'Natalie'},
                    {id: 5, name: 'Isabella'}
                ],
                messages: [
                    {id: 1, message: 'Hi!'},
                    {id: 2, message: 'How is it going ?'},
                    {id: 3, message: 'Yo!'},
                    {id: 4, message: 'Yo!'},
                    {id: 5, message: 'Yo!'}
                ],
                newMessageBody: ''
            },
            sidebar: {}
        },
    _callSubscriber(state: StateType) {
        console.log('State was changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: AllActionsType) {
        //
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        //❓ this._state.sidebar =  sidebarReducer(  this._state.sidebar, action)

        this._callSubscriber(this._state)


    }
}


//store = OOP

