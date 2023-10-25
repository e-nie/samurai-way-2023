import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogsItem";
import Message from "./message/Message";
import React from "react";
import {DialogsType, MessageType} from "../../index";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages:MessageType[]
}
export const Dialogs = (props:DialogsPropsType) => {


    const dialogsElements = props.dialogs.map(d => <DialogItem name = {d.name} id = {d.id} />)
    const messagesElements = props.messages.map(m => <Message message = {m.message} />)

    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className = {s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


