import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css"

type HeaderPropsType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
    isAuth: boolean
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return <header className={classes.header}>
        <img src="https://ss.sport-express.ru/userfiles/materials/160/1605423/large.jpg" alt={"image"}/>
        <div className={classes.loginBlock}>
            {props.isAuth ? props.data.login
                : <NavLink to={'/login' + props.data.id}>Login</NavLink>}
        </div>
    </header>
}