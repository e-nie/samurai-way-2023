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
    _callSubscriber:(state: StateType)=> void
    // _rerenderEntireTree: (state: StateType) => void
    // addPost: (postText:string) => void
    // updateNewPostText: (newText: string) => void
    subscribe:(observer: (state: StateType) => void) => void
    dispatch:(action:AllActionsType)=> void
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>


export type AllActionsType = AddPostActionType |UpdateNewPostActionType

export const addPostAC = (postText:string)  => {
    console.log('newText-add-post', postText)
    return {
        type:'ADD-POST',
        postText:postText
    } as const
}

export const updateNewPostAC = (newText:string) => {
    console.log('newText-update-post', newText)
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
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
    _callSubscriber(state: StateType) {
       console.log('State was changed');
   },
    getState() {
          return this._state
    },
     subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
     },
    //todo delete addPost
   // addPost() {
   //      const newPost: PostType = {
   //          id: new Date().getTime(),
   //          message: this._state.profilePage.newPostText,
   //          likesCount: 12
   //      }
   //      this._state.profilePage.posts.push(newPost)
   //      this._state.profilePage.newPostText = ''
   //      this._callSubscriber(this._state)
   //  },
    //todo delete updateNewPostText
   // updateNewPostText(newText: string) {
  //      this._state.profilePage.newPostText = newText
   //     this._callSubscriber(this._state)
   // },
    dispatch(action:AllActionsType) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                // message: this._state.profilePage.newPostText,
                message: action.postText,
                likesCount: 12
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}




//store = OOP

