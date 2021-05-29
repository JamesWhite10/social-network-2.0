import React from "react";
import {UsersPropsType} from "./UsersContainer";
import classes from "./Users.module.css";
import {Button} from "@material-ui/core";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

export const Users: React.FC<UsersPropsType> = (props) => {

    let getUsers = () => {

        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })

        }
    }

    return <div>
        <Button
            variant={"contained"}
            color={"secondary"}
            size={"large"}
            style={{marginTop: "15px", backgroundColor: "green"}}
            onClick={getUsers}
            className={classes.getUsers}>Get Users</Button>
        <div className={classes.users}>
            {
                props.users.map(u => <div key={u.id}>

                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={"avatar"}
                             className={classes.userPhoto}/>
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

                        <div className={classes.name}>{u.name}</div>
                        <div className={classes.status}>{u.status}</div>

                        <div className={classes.location}>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>

                    </div>
                </div>)
            }
        </div>
    </div>
}