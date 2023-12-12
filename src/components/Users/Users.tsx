import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'
import axios from "axios";
import {UserType} from "../../redux/users-reducer";
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        alert('new')
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <div>
            {/*<button onClick = {this.getUsers}>GET USERS</button>*/}
            {this.props.users.map((u: UserType) => <div key = {u.id}>
                <span>
                    <div>
                        <img src = {u.photos.small != null ? u.photos.small : userPhoto} className = {s.userPhoto}
                             alt = '' />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick = {() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick = {() => {
                                this.props.follow(u.id)
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
    }
}

export default Users
