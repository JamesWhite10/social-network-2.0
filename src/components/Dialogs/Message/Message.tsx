import React from "react";
import classes from "./../Dialogs.module.css"

export type MessagePropsType = {
    message: string
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

