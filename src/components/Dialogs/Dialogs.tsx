import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import {DialogsPropsType} from "./DialogsContainer";

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
                <TextField
                    onChange={onMessageChange}
                    value={props.newMessageText}
                    placeholder="Enter your message"/>
                <div>
                    <Button
                        variant={"contained"}
                        style={{marginTop: "10px"}}
                        color={"primary"}
                        onClick={newMessage}>Send</Button>
                </div>
            </div>
        </div>
    )
}