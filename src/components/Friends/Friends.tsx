import React from "react";
import classes from "../Dialogs/Dialogs.module.css";

export type FriendsPropsType = {
    image: string
    name: string
}

export const Friends: React.FC<FriendsPropsType> = (props) => {
    return (
        <div>
            <div className={classes.image}>
                <img src={props.image}/>
                {props.name}
            </div>
        </div>
    )
}