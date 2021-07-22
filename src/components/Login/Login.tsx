import React from "react";
import classes from "./Login.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <div>
                <div>Login:</div>
                <Field className={classes.input}
                       placeholder={"Email"}
                       name={"email"}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <div>Password:</div>
                <Field className={classes.input}
                       placeholder={"Password"}
                       name={"password"}
                       type={"password"}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> Remember me
            </div>
            {props.error &&
            <div className={classes.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Sign In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean | null
    error: string
}

const Login: React.FC<LoginPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={classes.loginBlock}>
            <h2>Log In</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
type MapStatePropsType = {
    isAuth: boolean | null
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)