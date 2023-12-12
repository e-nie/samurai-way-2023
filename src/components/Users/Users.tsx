import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'
import axios from "axios";
import {UserType} from "../../redux/users-reducer";
import userPhoto from '../../assets/images/user.png'


export const Users = (props: UsersPropsType) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => {
                    // debugger
                    props.setUsers(res.data.items)
                })
        }
    }

    return (
        <div>
        <button  onClick={getUsers}>GET USERS</button>
            {props.users.map((u: UserType) => <div key = {u.id}>
                <span>
                    <div>
                        <img src = {u.photos.small != null ? u.photos.small : userPhoto} className = {s.userPhoto} alt = '' />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick = {() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick = {() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                   <span><div>{u.name}</div>
                   <div>{u.status}</div>
                   </span>
                   <span>
                        <div>{'u.location.country'}</div>
                       <div>{'u.location.city'}</div>
                   </span>
                </span>
            </div>)}
        </div>
    );
};


