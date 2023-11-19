import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StateType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {StoreType} from "./redux/redux-store";


export type AppPropsType = {
     store: StoreType
    // dispatch:(action:any)=>void
}

const App: React.FC<AppPropsType> = (props) => {

//const state = props.store.getState()

    return (

        <div className = "app-wrapper">
            <Header />
            <Navbar />
            <div className = 'app-wrapper-content'>
                <Route path = {'/dialogs'} render = {() => <DialogsContainer
                   store={props.store} />} />

                <Route path = {'/profile'} render = {() => <Profile
                    profilePage={props.store.getState().profilePage}
                   dispatch={props.store.dispatch}

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

