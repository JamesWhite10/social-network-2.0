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
import {StoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

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
                <Route path="/dialogs" render={() => <DialogsContainer
                    store={props.store}/>}/>
                <Route path="/profile" render={() => <Profile
                    store={props.store}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/friends" component={Friends}/>
            </div>
        </div>
    );
}

export default App;
