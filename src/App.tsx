import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from './components/Friends/Friends';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileCont";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/users" component={UsersContainer}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/friends" component={Friends}/>
                <Route path="/login" component={Login}/>
            </div>
        </div>
    );
}

export default App;
