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
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType
    getState: () => void
    _rerenderEntireTree: (state: StateType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe(observer: (state: StateType) => void):()=> void
}

export let store = {
    _state: {
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
            ]
        }
    },
    getState() {
        debugger
        return this._state
    },
    _callSubscriber(state:StateType) {
        console.log('State was changed');
    },
    addPost() {
        debugger
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 12
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
}


//store = OOP

