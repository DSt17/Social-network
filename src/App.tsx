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
import {ActionsTypes, StateType} from "./redux/store";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes  ) => void
}

const App = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path={'/dialogs'} render={() =>
                    <Dialogs
                        state={props.state}
                        messagesTextereaValue={props.state.dialogsPage.messageForNewMessage}
                        dispatch={props.dispatch} /> }/>
                <Route path={'/profile'} render={() =>
                    <Profile
                        state={props.state.profilePage}
                        message={props.state.profilePage.messageForNewPost}
                        dispatch={props.dispatch}
                    />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Setting/>}/>
            </div>
        </div>
    )

}
export default App;
