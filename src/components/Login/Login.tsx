import React from "react";
import classes from "./Login.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormsControls";
import {required} from "../../utils/validators/validators";

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
                <Field className={classes.input}
                       placeholder={"Login"}
                       name={"login"}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <div>Password:</div>
                <Field className={classes.input}
                       placeholder={"Password"}
                       name={"password"}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> Remember me
            </div>
            <div>
                <button>Sign In</button>
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