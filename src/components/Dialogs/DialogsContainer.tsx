import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import store, {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {DialogType, MessageType} from "../../redux/store";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

type MapDispatchPropsType = {
    newMessage: () => void
    onMessageChange: (message: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        newMessage: () => {
            let state = store.getState().dialogsPage.newMessageText;
            dispatch(addMessageActionCreator(state))
        },
        onMessageChange: (message: string) => {
            dispatch(updateNewMessageTextActionCreator(message))
        }
    }
}

export default compose<React.ComponentType> (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs)
