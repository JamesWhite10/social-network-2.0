import {ActionsType, AddMessageActionType, DialogPageType, MessageType, UpdateNewMessageActionType} from "./state";

const dialogsReducer = (state: DialogPageType, action: ActionsType) => {

    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id: 6,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = (newMessageText: string): AddMessageActionType => ({
    type: "ADD-MESSAGE",
    newMessageText: newMessageText
})

export const updateNewMessageTextActionCreator = (newMessage: string): UpdateNewMessageActionType => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newMessage: newMessage
})

export default dialogsReducer;