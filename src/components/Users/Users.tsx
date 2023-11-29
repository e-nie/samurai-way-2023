import React from 'react';
import {UserType} from "../../redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'


export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
                followed: false,
                fullName: 'Evchen',
                status: 'I am everywhere',
                location: {country: 'UK', city: 'Paris'}
            },
            {
                id: 2,
                photoUrl: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
                followed: false,
                fullName: 'Ivonne',
                status: 'I am everywhere',
                location: {country: 'UK', city: 'London'}
            },
            {
                id: 3,
                photoUrl: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
                followed: false,
                fullName: 'Connor',
                status: 'I am everywhere',
                location: {country: 'Germany', city: 'Bonn'}
            }
        ])
    }
    return (
        <div>
            {props.users.map(u => <div key = {u.id}>
                <span>
                    <div>
                        <img src = {u.photoUrl} className = {s.userPhoto} alt = '' />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick = {() => {
                                props.follow(u.id)
                            }}>Unfollow</button>
                            : <button onClick = {() => {
                                props.unfollow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                   <span><div>{u.fullName}</div>
                   <div>{u.status}</div>
                   </span>
                   <span>
                        <div>{u.location.country}</div>
                       <div>{u.location.city}</div>
                   </span>
                </span>
            </div>)}
        </div>
    );
};


