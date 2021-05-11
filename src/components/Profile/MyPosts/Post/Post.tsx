import React from "react";
import classes from "./Post.module.css"

export type PostsPropsType = {
    message: string
    likeCount: number
}

export const Posts: React.FC<PostsPropsType> = (props) => {
    return (
                <div className={classes.item}>
                    <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/176058558/original/5d30aa3aa3101b3c2a3609baf4f14b69455c720c/create-your-own-nba-finals-avatar.jpg" />
                    {props.message}
                    <div>
                    <span>{props.likeCount}  Like</span>
                    </div>
                </div>
    )
}