import App from './App';
import {state, subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addPost, StateType, updateNewPostText} from './redux/state'
import {BrowserRouter} from 'react-router-dom';



const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state = {state} addPost = {addPost}
                 newPostText = {state.profilePage.newPostText}
                 updateNewPostText = {updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)
