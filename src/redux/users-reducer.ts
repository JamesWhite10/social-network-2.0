import {ActionsType, FollowActionType, SetUsersActionType, UnFollowActionType, UsersType} from "./store";

type InitialStateType = {
    users: Array<UsersType>
}

const initialState: InitialStateType = {
    users: [
        {
            id: 1,
            photoUrl: "https://i.pinimg.com/originals/8f/b4/59/8fb459037f4d74a1e9f0a681fbe4b9d0.jpg",
            followed: false,
            fullName: "Denny B.",
            status: "I am a Boss!",
            location: {city: "New-York", country: "USA"}
        },
        {
            id: 2,
            photoUrl: "https://ih1.redbubble.net/image.998506141.0576/st,small,507x507-pad,600x600,f8f8f8.jpg",
            followed: true,
            fullName: "Jenny O.",
            status: "Life is a game",
            location: {city: "Boston", country: "USA"}
        },
        {
            id: 3,
            photoUrl: "https://i.pinimg.com/originals/e8/6d/c8/e86dc80e40d0f8207dde4c324524eb6c.jpg",
            followed: true,
            fullName: "Patrik J.",
            status: "Hello world)))",
            location: {city: "LA", country: "USA"}
        },
        {
            id: 4,
            photoUrl: "https://i.pinimg.com/originals/4c/85/4c/4c854cdac5984514d4bb8a6ba0a84501.jpg",
            followed: false,
            fullName: "Alice K.",
            status: "I am happiest",
            location: {city: "Oregon", country: "USA"}
        }
    ]
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
export const setUsersAC = (users: []): SetUsersActionType => ({type: "SET-USERS", users}) // показать(установить) пользователей

export default usersReducer;