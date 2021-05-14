import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import { Dialogs } from "./Dialogs";


type DialogsContainerType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

    let state = props.store.getState()

    const newMessage = () => {
        props.store.dispatch(addMessageActionCreator(state.dialogsPage.newMessageText))
    }

    const onMessageChange = (message: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(message))
    }

    return (
        <Dialogs
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}
            newMessage={newMessage}
            onMessageChange={onMessageChange}/>
    )
}

export default DialogsContainer