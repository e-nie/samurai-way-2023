import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className = "app-wrapper">
                <Header />
                <Navbar />
                <div className = 'app-wrapper-content'>
                    <Route path={'/dialogs'} component = {Dialogs} />
                    <Route path={'/profile'} component = {Profile} />
                    <Route path={'/news'} component = {News} />
                    <Route path={'/music'} component = {Music} />
                    <Route path={'/settings'} component = {Settings} />
                </div>
            </div>
        </BrowserRouter>
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

