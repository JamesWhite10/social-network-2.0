import {
    ActionsType,
    AddMessageActionType, DialogType,
    MessageType
} from "./store";

export type InitialStateDialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const initialState: InitialStateDialogsType = {
    dialogs:[
        {id: 1, name: "Anna", avatar: "https://qaprovider.com/storage/users/2773_avatar1588529274.png"},
        {id: 2, name: "Max", avatar: "https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/d2/27/7b/d2277b15-bd32-0545-920e-8efc1767fc25/source/512x512bb.jpg"},
        {id: 3, name: "Ben", avatar: "https://narcosis-css.ru/800/600/http/pristor.ru/wp-content/uploads/2017/06/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B8-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B2-%D0%AE%D1%82%D1%83%D0%B1-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-15.jpg"},
        {id: 4, name: "Alice", avatar: "https://hypeava.ru/uploads/posts/2018-05/1527186697_5.png"},
        {id: 5, name: "Den", avatar: "https://instagram-my.ru/wp-content/uploads/2019/11/avainsta14.jpg"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo!!!"},
        {id: 3, message: "How is your playing basketball?"},
        {id: 4, message: "Yo!!!"},
        {id: 5, message: "Yo!!!"}
    ],
}

const dialogsReducer = (state: InitialStateDialogsType = initialState, action: ActionsType): InitialStateDialogsType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage = action.newMessageText
            return {
                ...state,
            messages: [...state.messages, {id: 6, message: newMessage}],
    }
        default:
            return state
    }
}

export const addMessageActionCreator = (newMessageText: string): AddMessageActionType => ({
    type: "ADD-MESSAGE",
    newMessageText: newMessageText
})

export default dialogsReducer;