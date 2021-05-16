import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from './components/Friends/Friends';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {

    //const state = props.store.getState()

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile" render={() => <Profile/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/friends" component={Friends}/>
            </div>
        </div>
    );
}

export default App;
