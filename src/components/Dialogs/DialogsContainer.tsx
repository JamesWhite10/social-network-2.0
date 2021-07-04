import {
    addMessageActionCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {DialogType, MessageType} from "../../redux/store";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type MapDispatchPropsType = {
    newMessage: (newMessageText: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        newMessage: (newMessageText: string) => {
            dispatch(addMessageActionCreator(newMessageText))
        }
    }
}

export default compose<React.ComponentType> (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs)
