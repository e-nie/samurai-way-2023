import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


export type AppPropsType = {
    // store: StoreType
    // dispatch:(action:any)=>void
}

const App: React.FC<AppPropsType> = (props) => {

//const state = props.store.getState()

    return (

        <div className = "app-wrapper">
            <Header />
            <Navbar />
            <div className = 'app-wrapper-content'>
                <Route path = {'/dialogs'} render = {() => <DialogsContainer />} />

                <Route path = {'/profile'} render = {() => <ProfileContainer />} />

                <Route path = {'/users'} render = {() => <UsersContainer />} />
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

