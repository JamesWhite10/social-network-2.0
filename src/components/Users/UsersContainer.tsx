import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {UsersType} from "../../redux/store";
import {
    getUsers,
    setCurrentPage, setIsFollowingInProgress,
    follow, unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


interface IUsersProps {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    setIsFollowingInProgress: (followingInProgress: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

interface IUsersState {
}

class UsersContainer extends React.Component<IUsersProps, IUsersState> {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onClickPageUsers = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onClickPageUsers={this.onClickPageUsers}
                setIsFollowingInProgress={this.props.setIsFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, setIsFollowingInProgress, getUsers
})(UsersContainer)

