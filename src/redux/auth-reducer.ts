import {
    ActionsType,
    SetUserData
} from "./store";

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
        id: null,
        login: null,
        email: null,
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

export default authReducer;