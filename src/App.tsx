import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Setting from './Components/Settings/Settings';
import News from './Components/News/News';
import Music from './Components/Music/Musi';
import {Route} from 'react-router-dom';
import {ActionsTypes, StateType, StoreType} from "./redux/store";
import DialogsContainer from './Components/Dialogs/DialogsContainer';

type AppPropsType = {
    store: StoreType
}

const App = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path={'/dialogs'} render={() =>
                    <DialogsContainer
                        store={props.store}
                    />}/>
                <Route path={'/profile'} render={() =>
                    <Profile
                        store={props.store}
                    />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Setting/>}/>
            </div>
        </div>
    )

}
export default App;
