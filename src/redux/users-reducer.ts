import {
    ActionsType,
    FollowActionType,
    SetCurrentPageType, SetIsFetchingType, SetTotalUsersCountType,
    SetUsersActionType,
    UnFollowActionType,
    UsersType
} from "./store";

type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
        default:
            return state
    }
}

export const follow = (userId: number): FollowActionType => ({type: "FOLLOW", userId}) // подписаться на пользователя
export const unfollow = (userId: number): UnFollowActionType => ({type: "UN-FOLLOW", userId}) // отписаться от пользователя
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({type: "SET-USERS", users}) // показать(установить) пользователей
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: "SET-CURRENT-PAGE", currentPage}) // текущая страница
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({type: "SET-TOTAL-USERS-COUNT", totalUsersCount}) // общее колличество пользователей
export const setIsFetching = (isFetching: boolean): SetIsFetchingType => ({type: "TOGGLE-IS-FETCHING", isFetching}) // для иконки прелоадера

export default usersReducer;