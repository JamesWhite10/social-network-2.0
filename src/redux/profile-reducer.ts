import {
    ActionsType,
    AddPostActionType,
    PostType, ProfileType, SetStatusType,
    SetUserProfileType,
    UpdateNewPostActionType
} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

type InitialStateType = {
    profile: ProfileType | null
    posts: Array<PostType>
    newPostText: string
    status: string | null
}

const initialState: InitialStateType = {
    profile: null,
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 23},
        {id: 2, message: "It's my first Post!!", likeCount: 58},
        {id: 3, message: "Are you ready....", likeCount: 17}
    ],
    newPostText: "it-max.com",
    status: "",
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = state.newPostText
            return {
                ...state,
                posts: [...state.posts, {id: 4, message: newPost, likeCount: 0}],
                newPostText: ""
            }
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newPost
            }
        case "SET-USER-PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "SET-STATUS":
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}

export const addPost = (newPostText: string): AddPostActionType => ({
    type: "ADD-POST", newPostText
})
export const updateNewPostText = (newPost: string): UpdateNewPostActionType => ({
    type: "UPDATE-NEW-POST-TEXT", newPost
})
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
    type: "SET-USER-PROFILE", profile
})
export const setStatus = (status: string): SetStatusType => ({
    type: "SET-STATUS", status
})

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}
export const getUserStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer;