import {connect} from "react-redux";
import {
    followSuccess,
    getUsers, setCurrentPage, setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching, unfollowSuccess, UnfollowSuccessActionType,
    UserType
} from "redux/users-reducer";
import {AppStatetype} from "redux/redux-store";

import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]


}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    // toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: any

}

export type  UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


class UsersContainer extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                users = {this.props.users}
                totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                isFetching = {this.props.isFetching}
                toggleIsFetching = {this.props.toggleIsFetching}
                onPageChanged = {this.onPageChanged}
                unfollow = {this.props.unfollow}
                follow = {this.props.follow}
                setCurrentPage = {this.props.setCurrentPage}
                setTotalUsersCount = {this.props.setTotalUsersCount}
                setUsers = {this.props.setUsers}
                // toggleFollowingProgress = {this.props.toggleFollowingProgress}
                followingInProgress = {this.props.followingInProgress}
                getUsers = {this.props.getUsers}
            />
        </>
    }
}


const mapStateToProps = (state: AppStatetype): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// const mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps, {
    follow: followSuccess,
    unfollow: unfollowSuccess,
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    setTotalUsersCount: setTotalUsersCount,
    toggleIsFetching: toggleIsFetching,
    toggleFollowingProgress: toggleFollowingProgress,
    getUsers: getUsers
})(UsersContainer);

//❗️So essentially, the connect function acts as a bridge between your presentational component and the Redux store,
// returning a container component that has access to the Redux state and actions:
//same as above:

// function connect(mapStateToProps, mapDispatchToProps) {
//     return UserContainer(Users);
// }
