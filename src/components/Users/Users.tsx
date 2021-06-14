import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {Button} from "@material-ui/core";
import {UsersType} from "../../redux/store";
import {NavLink} from "react-router-dom";
import {subscriptionDeleteAPI, subscriptionPostAPI} from "../../api/api";

type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onClickPageUsers: (pageNumber: number) => void
}

let Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={classes.pages}>
            {
                pages.map((p, index) => {
                    return <span key={index} className={props.currentPage === p && classes.selectedPage}
                                 onClick={() => {
                                     props.onClickPageUsers(p);
                                 }}>{p}</span>
                })
            }
        </div>
        <div className={classes.users}>
            {
                props.users.map(u => <div key={u.id}>

                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={"avatar"}
                                 className={classes.userPhoto}/>
                        </NavLink>
                    </div>
                    <div className={classes.button}>
                        {u.followed
                            ? <Button
                                variant={"contained"}
                                size={"small"}
                                color={"secondary"}
                                onClick={() => {
                                    subscriptionDeleteAPI.deleteSubscription(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })
                                }}>Unfollow</Button>
                            : <Button
                                variant={"contained"}
                                size={"small"}
                                color={"primary"}
                                onClick={() => {
                                    subscriptionPostAPI.postSubscription(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })
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

export default Users;