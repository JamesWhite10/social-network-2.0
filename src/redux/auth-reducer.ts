import {
    ActionsType,
    SetUserData
} from "./store";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";

type InitialStateType = {
    id: number | null
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

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean | null): SetUserData =>
    ({type: "SET-USER-DATA", payload: {id, email, login, isAuth}})

//Thunk
type DispatchThunkType = ThunkDispatch<Promise<void>, AppStateType, ActionsType>

export const setUserData = () => {
    return (dispatch: DispatchThunkType) => {
        authAPI.getHeader().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: DispatchThunkType) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {

                dispatch(setUserData())
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