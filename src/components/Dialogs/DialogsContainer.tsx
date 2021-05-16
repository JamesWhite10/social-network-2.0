import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {Provider, StoreContext} from "../../StoreContext";
import store, {StoreReduxType} from "../../redux/redux-store";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store: StoreReduxType) => {

                    let state = store.getState()

                    const newMessage = () => {
                        store.dispatch(addMessageActionCreator(state.dialogsPage.newMessageText))
                    }

                    const onMessageChange = (message: string) => {
                        store.dispatch(updateNewMessageTextActionCreator(message))
                    }

                    return <Dialogs
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}
                        newMessageText={state.dialogsPage.newMessageText}
                        newMessage={newMessage}
                        onMessageChange={onMessageChange}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer