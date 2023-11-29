import {AppStatetype, DispatchType, store, StoreType} from "../../redux/redux-store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {Dispatch} from "redux";
import {DialogsPageType} from "../../redux/store";

// type DialogsContainerPropsType = {
//     store: StoreType
// }

export type MapStateToPropsType = {
    dialogsPage:DialogsPageType
}

export type MapDispatchToPropsType = {
    updateNewMessageBody:(body:string) => void
    sendMessage:()=> void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStatetype):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
          dispatch(sendMessageAC())
        }
    }
}


export const  DialogsContainer = connect<{  }, {  }, any, any>(mapStateToProps, mapDispatchToProps)(Dialogs)


