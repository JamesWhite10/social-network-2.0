import React from "react";
import classes from "./Login.module.css";
import {LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export const LoginPage = () => {
    return (
        <div className={classes.loginBlock}>
            <h2>Log In</h2>
            <LoginReduxForm/>
        </div>
    )
}