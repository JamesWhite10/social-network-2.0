import React from "react";
import classes from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/store";
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string | ReadonlyArray<string> | number;
    updateStatus: (status: string) => void
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


                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.fullName}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}