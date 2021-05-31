import React from "react";
import classes from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"
import {Button} from "@material-ui/core";
import {UsersType} from "../../redux/store";

interface IUsersProps {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

interface IUsersState {
}

class Users extends React.Component<IUsersProps, IUsersState> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    componentWillUnmount() {
    }

    render() {
        return <div>
      {/*      <Button
                variant={"contained"}
                color={"secondary"}
                size={"large"}
                style={{marginTop: "15px", backgroundColor: "green"}}
                onClick={this.getUsers}
                className={classes.getUsers}>Get Users</Button>*/}
            <div className={classes.users}>
                {
                    this.props.users.map(u => <div key={u.id}>

                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={"avatar"}
                                 className={classes.userPhoto}/>
                        </div>
                        <div className={classes.button}>
                            {u.followed
                                ? <Button variant={"contained"} size={"small"} color={"secondary"} onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</Button>
                                : <Button variant={"contained"} size={"small"} color={"primary"} onClick={() => {
                                    this.props.follow(u.id)
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
}


export default Users;

