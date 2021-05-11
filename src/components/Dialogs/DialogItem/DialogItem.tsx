import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./../Dialogs.module.css"

export type DialogItemPropsType = {
    name: string
    id: number
    avatar: string
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.activeLink}>
                <div className={classes.avatar}>
                    <img src={props.avatar} alt={"image"}/>
                    <div>
                        <span className={classes.name}>{props.name}</span>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}


