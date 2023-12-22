import {connect} from "react-redux";
import {
    followAC, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {AppStatetype, DispatchType} from "../../redux/redux-store";

import React from "react";
import axios from "axios";
import Users from "./Users";

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage:number

}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage:(currentPage: number)=> void
    setTotalUsersCount:(totalUsersCount:number)=> void
}

export type  UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {
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
        return <Users
            users = {this.props.users}
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
            setCurrentPage = {this.props.setCurrentPage}
            setTotalUsersCount = {this.props.setTotalUsersCount}
            setUsers = {this.props.setUsers}
        />
    }
}


const mapStateToProps = (state: AppStatetype): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {


    return {
        follow: (userId: number) => {
            console.log(userId)
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            console.log(userId)
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber:number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount:number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

//❗️So essentially, the connect function acts as a bridge between your presentational component and the Redux store,
// returning a container component that has access to the Redux state and actions:
//same as above:

// function connect(mapStateToProps, mapDispatchToProps) {
//     return UserContainer(Users);
// }
