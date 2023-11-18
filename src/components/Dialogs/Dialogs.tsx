import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogsItem";
import Message from "./message/Message";
import React, {ChangeEvent} from "react";
import {AllActionsType, DialogsPageType, StateType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: AllActionsType) => void
}
export const Dialogs = (props: DialogsPropsType) => {


    const dialogsElements = props.state.dialogs.map(d => <DialogItem name = {d.name} id = {d.id} />)
    const messagesElements = props.state.messages.map(m => <Message message = {m.message} />)
    const newMessageBody = props.state.newMessageBody


    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className = {s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value = {newMessageBody}
                        placeholder = {'Enter your message'}
                        onChange = {onNewMessageChange}
                    ></textarea></div>
                    <div>
                        <button onClick = {onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


