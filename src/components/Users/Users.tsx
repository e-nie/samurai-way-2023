import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'
import axios from "axios";
import {UserType} from "../../redux/users-reducer";
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);

    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })

    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return <div>
            <div>
                {pages.map(p => {
                    console.log(this.props.currentPage === p && s.selectedPage );
                    return <span className = {this.props.currentPage === p ? s.selectedPage : '' }

                                 onClick = {(e) => this.onPageChanged(p)}>{p}</span>
                })}
            </div>
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
