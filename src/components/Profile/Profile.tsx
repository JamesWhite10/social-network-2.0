import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostType} from "../../redux/store";


type ProfilePropsType = {
    profilePage: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}