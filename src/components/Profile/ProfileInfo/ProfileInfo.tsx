import React from "react";
import classes from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.image}>
                <img src="https://a.espncdn.com/photo/2016/0112/NBARankATPG_1296x518.jpg" alt={"image"}/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}