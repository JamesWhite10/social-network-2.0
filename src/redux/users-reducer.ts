import {ActionsType, FollowActionType, SetUsersActionType, UnFollowActionType, UsersType} from "./store";

type InitialStateType = {
    users: Array<UsersType>
}

const initialState: InitialStateType = {
    users: []
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: number): FollowActionType => ({type: "FOLLOW", userId}) // подписаться на пользователя
export const unfollowAC = (userId: number): UnFollowActionType => ({type: "UN-FOLLOW", userId}) // отписаться от пользователя
export const setUsersAC = (users: Array<UsersType>): SetUsersActionType => ({type: "SET-USERS", users}) // показать(установить) пользователей

export default usersReducer;