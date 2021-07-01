import React from "react";
import classes from "./Login.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form className={classes.form} onSubmit={props.handleSubmit}>
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
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div className={classes.loginBlock}>
            <h2>Log In</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}