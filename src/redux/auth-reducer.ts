import {
    ActionsType,
    SetUserData
} from "./store";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

type InitialStateType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                email: action.payload.email,
                login: action.payload.login,
                id: action.payload.id,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: string | null, email: string | null, login: string | null, isAuth: boolean | null): SetUserData =>
    ({type: "SET-USER-DATA", payload: {id, email, login, isAuth}})

//Thunk
export type DispatchThunkType = ThunkDispatch<Promise<void>, AppStateType, ActionsType>

export const getAuthUserData = () => {
    return (dispatch: DispatchThunkType) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: DispatchThunkType | any) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
    }
}
export const logOut = () => {
    return (dispatch: DispatchThunkType) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, null))
                }
            })
    }
}

export default authReducer;