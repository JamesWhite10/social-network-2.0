import {ActionsType, SetInitializedType} from "../redux/store";
import {DispatchThunkType, getAuthUserData} from "../redux/auth-reducer";
import {authAPI} from "../api/api";

type InitialStateType = {
  initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: action.initialized}
        default:
            return state
    }
}

export const setInitialized = (initialized: boolean): SetInitializedType => ({type: "SET-INITIALIZED", initialized})

export const initializeApp = () => (dispatch: DispatchThunkType) => {
    dispatch(getAuthUserData())
    authAPI.me()
        .then(() => {
            dispatch(setInitialized(true))
        })
}