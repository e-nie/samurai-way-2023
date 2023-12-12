import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {
    followAC,

    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {AppStatetype, DispatchType} from "../../redux/redux-store";

type MapStateToPropsType = {
    users: UserType[]
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export type  UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStatetype): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {


    return {
        follow: (userId: number) => {
console.log(userId)
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) =>{
            console.log(userId)
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
