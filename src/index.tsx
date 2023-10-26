import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state} from './redux/state'
import { BrowserRouter } from 'react-router-dom';


const messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How is it going ?'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'Yo!'},
    {id: 5, message: 'Yo!'}
]
// addPost('heylllll')

ReactDOM.render(
    <BrowserRouter>
    <App state = {state} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById('root')
);
