import React from "react";
import classes from "./Login.module.css";
import Button from "@material-ui/core/Button";
import {Field} from "redux-form";

export const LoginForm = () => {
    return (
            <form className={classes.form}>
                <div>
                    <div>Login:</div>
                    <Field className={classes.input} placeholder={"Login"} name={"login"} component={"input"}/>
                </div>
                <div>
                    <div>Password:</div>
                    <Field className={classes.input} placeholder={"Password"} name={"password"} component={"input"}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> Remember me
                </div>
                <div>
                    <Button variant={"contained"} color={"primary"}>Log In</Button>
                </div>
            </form>
    )
}