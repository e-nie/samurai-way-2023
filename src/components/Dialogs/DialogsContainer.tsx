import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogsItem";
import Message from "./message/Message";
import React, {ChangeEvent} from "react";
import { StoreType} from "../../redux/redux-store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {DialogsPageType} from "../../redux/store";

type DialogsContainerPropsType = {
    store: StoreType
}
export const DialogsContainer = (props: DialogsContainerPropsType) => {

    let state:DialogsPageType = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <Dialogs updateNewMessageBody = {onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    )
}


