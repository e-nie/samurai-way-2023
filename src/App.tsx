import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StateType, StoreType} from "./redux/state";

export type AppPropsType = {
    state: StateType
    dispatch:(action:any)=>void
}

const App: React.FC<AppPropsType> = (props) => {

//const state = props.store.getState()

    return (

        <div className = "app-wrapper">
            <Header />
            <Navbar />
            <div className = 'app-wrapper-content'>
                <Route path = {'/dialogs'} render = {() => <Dialogs
                    state = {props.state.dialogsPage} />} />

                <Route path = {'/profile'} render = {() => <Profile
                    profilePage = {props.state.profilePage}
                    dispatch = {props.dispatch}

                />} />
            </div>
        </div>

    )
}

// type MessageType = {
//     message: string
// }
//
// const HelloMessage: React.FC<MessageType> = (props) => {
//     return <h1>{props.message}</h1>
// }
//
// const ByeMessage = (props: MessageType) => {
//     return <h1>{props.message}</h1>
// }

export default App;

