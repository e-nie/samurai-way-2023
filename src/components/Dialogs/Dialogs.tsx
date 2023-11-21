import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogsItem";
import Message from "./message/Message";
import React, {ChangeEvent} from "react";
import { DialogsPageType} from "../../redux/store";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}
export const Dialogs = (props: DialogsPropsType) => {
    let state:DialogsPageType = props.dialogsPage

    const dialogsElements = state.dialogs.map(d => <DialogItem name = {d.name} id = {d.id} />)
    const messagesElements = state.messages.map(m => <Message message = {m.message} />)
    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
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


