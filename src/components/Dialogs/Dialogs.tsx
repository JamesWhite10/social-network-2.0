import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/store";


type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
    newMessage: () => void
    onMessageChange: (message: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)

    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)

    const newMessage = () => {
        props.newMessage()
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value
        props.onMessageChange(message)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea
                    onChange={onMessageChange}
                    value={props.newMessageText}
                    placeholder="Enter your message"/>
                <div>
                    <button onClick={newMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}