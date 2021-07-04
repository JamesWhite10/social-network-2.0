import React from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)

    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)

    const addNewMessage = (values: FormDataType) => {
        props.newMessage(values.newMessageText)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.form}>
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

type FormDataType = {
    newMessageText: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newMessageText" placeholder="Enter your message"/>
            <div>
                <button className={classes.button}>Send</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)