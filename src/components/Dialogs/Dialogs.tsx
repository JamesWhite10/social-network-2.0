import React from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {Textarea} from "../../common/FormControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Dispatch} from "redux";

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)

    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)

    const addNewMessage = (values: FormDataType, dispatch: Dispatch) => {
        props.newMessage(values.newMessageText)
        dispatch(reset("dialogAddMessageForm"))
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

const maxLength300 = maxLengthCreator(300)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name="newMessageText"
                   placeholder="Enter your message"
            validate={[required, maxLength300]}/>
            <div>
                <button className={classes.button}>Send</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)