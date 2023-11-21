import {AppStatetype, DispatchType, store, StoreType} from "../../redux/redux-store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";

type DialogsContainerPropsType = {
    store: StoreType
}


const mapStateToProps = (state: AppStatetype) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch:DispatchType) => {
    return {
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
          dispatch(sendMessageAC())
        }
    }
}


export const  DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


