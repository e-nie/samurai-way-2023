import App from './App';
import {store} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';


const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state = {store.getState()} dispatch = {store.dispatch.bind(store)} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

store.subscribe(rerenderEntireTree)
rerenderEntireTree()


