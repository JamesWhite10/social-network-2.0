import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from './components/Friends/Friends';
import {StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {

    const state = props.store.getState()

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar friends={state.sidebar.friends}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <Dialogs
                    dialogs={state.dialogsPage.dialogs}
                    messages={state.dialogsPage.messages}
                    newMessageText={state.dialogsPage.newMessageText}
                    dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path="/profile" render={() => <Profile
                    profilePage={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/friends" component={Friends}/>
            </div>
        </div>
    );
}

export default App;
