import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css"
import {Button} from "@material-ui/core";

type HeaderPropsType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean | null
    logOut: () => void
}

export const Header: React.FC<HeaderPropsType> = (props) => {

    return <header className={classes.header}>
        <img src="https://ss.sport-express.ru/userfiles/materials/160/1605423/large.jpg" alt={"image"}/>
        <div className={classes.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <Button variant={"contained"} color={"primary"} onClick={props.logOut}>Log Out</Button></div>
                : <NavLink to={'/login' + props.id}>Login</NavLink>}
        </div>
    </header>
}