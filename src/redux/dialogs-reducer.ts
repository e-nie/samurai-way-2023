import {AllActionsType, DialogsPageType, DialogsType, PostType, StateType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

let initialState = {
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
}


export const dialogsReducer = (state: DialogsPageType = initialState, action: AllActionsType):DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body
            return stateCopy
        }
        case SEND_MESSAGE: {
            let stateCopy = {...state}
            let body = stateCopy.newMessageBody
            stateCopy.newMessageBody = ''
            stateCopy.messages.push({id: 6, message: body})
            return stateCopy
        }
        default:
            return state
    }
}

