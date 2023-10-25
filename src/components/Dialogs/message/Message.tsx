import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

export type   MessagePropsType  = {
    message:string
}

const Message:React.FC<MessagePropsType> = (props) => {
    return (
        <div className = {s.message}>{props.message}</div>
    )
}


export default Message
