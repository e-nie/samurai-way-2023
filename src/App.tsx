import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
    return (
        // <BrowserRouter>
            <div className = "app-wrapper">

                <Header />
                <Navbar />
               <Profile/>





































                {/*<Route path = {'/hello'} render = {() => <HelloMessage message = 'Hello Friends!' />} />*/}
                {/*<Route path = {'/bye'} render = {() => <ByeMessage message = 'Bye Friends!' />} />*/}
            </div>
        // </BrowserRouter>
    )
        ;
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

