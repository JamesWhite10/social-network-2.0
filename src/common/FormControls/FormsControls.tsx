import React from "react";
import {WrappedFieldProps} from "redux-form";
import classes from "./FormsControls.module.css";

export const Textarea: React.FC<WrappedFieldProps> = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={`${classes.formControl} ${hasError ? classes.error: ""}`}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span className={classes.span}>{error}</span>}
        </div>
    )
}