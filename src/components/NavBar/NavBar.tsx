import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import classes from "./NavBar.module.css"
import {Friends} from "../Friends/Friends";
import {StoreContext} from "../../StoreContext";

export const NavBar = () => {
    const store = useContext(StoreContext)
    let friendElement = store.getState().sidebar.friends.map(i => <Friends name={i.name} image={i.image}/>)

    return <nav className={classes.nav}>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="news" activeClassName={classes.activeLink}>News</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
            <div className={classes.settings}>
                <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
            <div className={classes.friends}>
                <NavLink to="/friends" activeClassName={classes.activeLink}>Friends</NavLink>
                <div className={classes.image}>
                    {friendElement}
                </div>
            </div>
        </div>
    </nav>
}