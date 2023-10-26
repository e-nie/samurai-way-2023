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
}


export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How Are you? ', likesCount: 5},
            {id: 2, message: 'It\s my first post', likesCount: 7},
            {id: 3, message: 'Wuhu!', likesCount: 100},
            {id: 4, message: 'Ku-ku', likesCount: 3},
        ],
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
}


export const addPost = (postMessage: string) => {
    debugger
    const newPost:PostType = {id: new Date().getTime(), message: postMessage, likesCount: 12}
    state.profilePage.posts.push(newPost)
}
