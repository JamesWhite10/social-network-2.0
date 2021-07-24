import {
    ActionsType,
    FollowActionType,
    SetCurrentPageType, SetIsFetchingType, SetIsFollowingInProgressType, SetTotalUsersCountType,
    SetUsersActionType,
    UnFollowActionType,
    UsersType
} from "./store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UN-FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return <InitialStateType>{
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const acceptFollow = (userId: number): FollowActionType => ({type: "FOLLOW", userId}) // подписаться на пользователя
export const acceptUnfollow = (userId: number): UnFollowActionType => ({type: "UN-FOLLOW", userId}) // отписаться от пользователя
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({type: "SET-USERS", users}) // показать(установить) пользователей
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: "SET-CURRENT-PAGE", currentPage}) // текущая страница
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({
    type: "SET-TOTAL-USERS-COUNT",
    totalUsersCount
}) // общее колличество пользователей
export const setIsFetching = (isFetching: boolean): SetIsFetchingType => ({type: "TOGGLE-IS-FETCHING", isFetching}) // для иконки прелоадера
export const setIsFollowingInProgress = (followingInProgress: boolean, userId: number): SetIsFollowingInProgressType => ({
    type: "TOGGLE-IS-FOLLOWING-PROGRESS",
    followingInProgress,
    userId,
}) // для дизейбла иконки баттона

export const requestUsers = (page: number, pageSize: number) => {    //санк креэйтор!!!
    return (dispatch: Dispatch) => {    //санка!!!
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(page))

        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFollowingInProgress(true, userId))
        usersAPI.postSubscription(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(acceptFollow(userId))
            }
            dispatch(setIsFollowingInProgress(false, userId))
        })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFollowingInProgress(true, userId))
        usersAPI.deleteSubscription(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(acceptUnfollow(userId))
            }
            dispatch(setIsFollowingInProgress(false, userId))
        })
    }
}

export default usersReducer;