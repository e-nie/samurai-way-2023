import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export type PostsType= {
    id:number
    message:string
    likesCount:number
}
export type DialogsType = {
    id:number
    name:string
}

export type MessageType = {
    id:number
    message: string
}

const posts = [
    {id: 1, message: 'Hi! How Are you? ', likesCount: 5},
    {id: 2, message: 'It\s my first post', likesCount: 7},
    {id: 3, message: 'Wuhu!', likesCount:100},
    {id: 4, message: 'Ku-ku', likesCount: 3},
]
const dialogs
    = [
    {id: 1, name: 'Evchen'},
    {id: 2, name: 'Aloise'},
    {id: 3, name: 'Florence'},
    {id: 4, name: 'Natalie'},
    {id: 5, name: 'Isabella'}
]

const messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How is it going ?'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'Yo!'},
    {id: 5, message: 'Yo!'}
]
ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
);
