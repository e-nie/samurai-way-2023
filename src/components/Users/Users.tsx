import React from 'react';
import s from "./users.module.css";
import {UserType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/user.png";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersCallbackPropsType = {
    onPageChanged: (number: number) => void
}

type UsersFCPropsType = UsersPropsType & UsersCallbackPropsType

const Users = (props: UsersFCPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {pages.map(p => {
                    // console.log( props.currentPage === p && s.selectedPage);
                    return <span className = {props.currentPage === p ? s.selectedPage : ''}

                                 onClick = {(e) => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {/*<button onClick = {this.getUsers}>GET USERS</button>*/}
            {props.users.map((u: UserType) => <div key = {u.id}>
                <span>
                    <div>
                        <NavLink to = {`/profile/${u.id}`}>
                        <img src = {u.photos.small != null ? u.photos.small : userPhoto} className = {s.userPhoto}
                             alt = '' />
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick = {() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/unfollow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '91c2fc47-8224-493c-9f29-47e2d3ef03a4'
                                    }
                                })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick = {() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '91c2fc47-8224-493c-9f29-47e2d3ef03a4'
                                    }
                                })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
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

export default Users;
