import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css"
import {Button} from "@material-ui/core";

type HeaderPropsType = {
    data: {
        id: number | null
        login: string | null
        email: string | null
    }
    isAuth: boolean
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return <header className={classes.header}>
        <img src="https://ss.sport-express.ru/userfiles/materials/160/1605423/large.jpg" alt={"image"}/>
        <div className={classes.loginBlock}>
            {props.isAuth ? props.data.login
                : <NavLink to={'/login' + props.data.id}>
                    <Button>
                        Login
                    </Button>
                </NavLink>}
        </div>
    </header>
}