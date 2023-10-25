import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from './redux/state'


const messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How is it going ?'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'Yo!'},
    {id: 5, message: 'Yo!'}
]
ReactDOM.render(
    <App state = {state} />,
    document.getElementById('root')
);
