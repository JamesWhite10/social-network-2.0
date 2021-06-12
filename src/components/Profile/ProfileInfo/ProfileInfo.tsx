import React from "react";
import classes from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/store";
import Preloader from "../../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: ProfileType | null
}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    if (!props.profile) {
        return <div style={{textAlign: "center"}}>
            <Preloader/>
        </div>
    }

    return (
        <div>
            <div className={classes.image}>
                <img src="https://a.espncdn.com/photo/2016/0112/NBARankATPG_1296x518.jpg" alt={"image"}/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt={"image"}/>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.fullName}</div>
                ava + description
            </div>
        </div>
    )
}