import React from 'react';
import s from "./users.module.css";
import {UserType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/user.png";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "api/api";

type UsersCallbackPropsType = {
    onPageChanged: (number: number) => void
    // toggleFollowingProgress: (isFetching: boolean, userId: number) => void
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
                            ? <button disabled = {props.followingInProgress.some(id => id === u.id)} onClick = {() => {
                                props.unfollow(u.id)
                            }}>
                                Unfollow</button>
                            : <button disabled = {props.followingInProgress.some(id => id === u.id)} onClick = {() => {
                             props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span className={s.userText}>
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
