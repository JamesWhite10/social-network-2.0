import {
    ActionsType,
    SetUserData
} from "./store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type InitialStateType = {
    data: {
        id: number | null
        login: string | null
        email: string | null
    }
    isAuth: boolean
}

const initialState: InitialStateType = {
    data: {
        id: 17363,
        login: " JamesWhite10",
        email: "max.migalin10@gmail.com",
    },
    isAuth: false
}
const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = ( data: {
    id: number | null
    login: string | null
    email: string | null
}): SetUserData => ({type: "SET-USER-DATA", data})

export const setUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.getHeader().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data))
            }
        })
    }
}

export default authReducer;