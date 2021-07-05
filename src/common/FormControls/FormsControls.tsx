import React from "react";
import {WrappedFieldProps} from "redux-form";
import classes from "./FormControl.module.css";

export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${classes.formControl} ${hasError ? classes.error: ""}`}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}