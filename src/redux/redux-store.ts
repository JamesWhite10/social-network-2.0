import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

let store = createStore(rootReducer)

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

export type StoreReduxType = typeof store

export default store