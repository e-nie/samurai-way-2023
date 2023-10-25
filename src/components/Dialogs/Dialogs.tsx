import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogsItem";
import Message from "./message/Message";
import React from "react";
import {DialogsPageType, StateType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
}
export const Dialogs = (props:DialogsPropsType) => {


    const dialogsElements = props.state.dialogs.map(d => <DialogItem name = {d.name} id = {d.id} />)
    const messagesElements = props.state.messages.map(m => <Message message = {m.message} />)

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


