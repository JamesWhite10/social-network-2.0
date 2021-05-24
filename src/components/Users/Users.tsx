import React from "react";
import {UsersPropsType} from "./UsersContainer";
import classes from "./Users.module.css";
import {Button} from "@material-ui/core";

export const Users: React.FC<UsersPropsType> = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: "https://i.pinimg.com/originals/8f/b4/59/8fb459037f4d74a1e9f0a681fbe4b9d0.jpg",
                    followed: false,
                    fullName: "Denny B.",
                    status: "I am a Boss!",
                    location: {city: "New-York", country: "USA,"}
                },
                {
                    id: 2,
                    photoUrl: "https://ih1.redbubble.net/image.998506141.0576/st,small,507x507-pad,600x600,f8f8f8.jpg",
                    followed: true,
                    fullName: "Jenny O.",
                    status: "Life is a game",
                    location: {city: "Boston", country: "USA,"}
                },
                {
                    id: 3,
                    photoUrl: "https://i.pinimg.com/originals/e8/6d/c8/e86dc80e40d0f8207dde4c324524eb6c.jpg",
                    followed: true,
                    fullName: "Patrik J.",
                    status: "Hello world)))",
                    location: {city: "LA", country: "USA,"}
                },
                {
                    id: 4,
                    photoUrl: "https://i.pinimg.com/originals/4c/85/4c/4c854cdac5984514d4bb8a6ba0a84501.jpg",
                    followed: false,
                    fullName: "Alice K.",
                    status: "I am happiest",
                    location: {city: "Oregon", country: "USA,"}
                },
            ]
        )
    }

    return <div className={classes.users}>
        {
            props.users.map(u => <div key={u.id}>

                    <div>
                        <img src={u.photoUrl} alt={"avatar"} className={classes.userPhoto}/>
                    </div>
                    <div className={classes.button}>
                        {u.followed
                            ? <Button variant={"contained"} size={"small"} color={"secondary"} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</Button>
                            : <Button variant={"contained"} size={"small"} color={"primary"} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</Button>}
                    </div>

                <div className={classes.userInfo}>

                        <div className={classes.name}>{u.fullName}</div>
                        <div className={classes.status}>{u.status}</div>

                        <div className={classes.location}>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                        </div>

                </div>
            </div>)
        }
    </div>
}