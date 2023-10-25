import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {DialogsType, MessageType, PostsType} from "./index";

export type AppPropsType = {
    posts:PostsType[]
    dialogs:DialogsType[]
    messages: MessageType[]
}

function App(props:AppPropsType): JSX.Element {

    return (
        <BrowserRouter>
            <div className = "app-wrapper">
                <Header />
                <Navbar />
                <div className = 'app-wrapper-content'>
                    <Route path = {'/dialogs'} render = {() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
                    <Route path = {'/profile'} render = {()=> <Profile posts={props.posts}/>} />
                    <Route path = {'/news'} render = {()=> <News/>} />
                    <Route path = {'/music'} render = {()=> <Music/>} />
                    <Route path = {'/settings'} render = {()=> <Settings/>} />
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

