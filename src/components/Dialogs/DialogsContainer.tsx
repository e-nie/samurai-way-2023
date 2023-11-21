import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogsItem";
import Message from "./message/Message";
import React, {ChangeEvent} from "react";
import {StoreType} from "../../redux/redux-store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

import {StoreContext} from "../../StoreContext";

type DialogsContainerPropsType = {
    store: StoreType
}
export const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            // let state: DialogsPageType = store.getState().dialogsPage
            const onSendMessageClick = () => {
                store.dispatch(sendMessageAC())
            }

            const onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyAC(body))
            }

            return <Dialogs updateNewMessageBody = {onNewMessageChange}
                            sendMessage = {onSendMessageClick}
                            dialogsPage = {store.getState().dialogsPage} />
        }
        }
    </StoreContext.Consumer>

}


