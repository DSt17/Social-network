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
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Users from './Components/Users/Users';
import UsersContainer from './Components/Users/UsersContainer';



type AppPropsType = {}

const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path={'/dialogs'} render={() =>
                    <DialogsContainer/>}/>
                <Route path={'/profile'} render={() =>
                    <Profile/>}/>
                <Route path={'/users'} render={ () => <UsersContainer /> } />


                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Setting/>}/>
            </div>
        </div>
    )

}
export default App;
