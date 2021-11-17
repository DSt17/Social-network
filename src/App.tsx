import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Setting from './Components/Settings/Settings';
import News from './Components/News/News';
import Music from './Components/Music/Musi';
import {addMessage, addPost, ChangeNewMessageCallback, ChangeNewTextCallback, stateType} from "./redux/state";
import {Route} from 'react-router-dom';

type AppPropsType = {
    state: stateType
    addPost: (postMessage: string) => void
    addMessage:(message:string)=>void
    ChangeNewMessageCallback:(NewMessage:string) => void
    ChangeNewTextCallback:(NewText:string)=>void
}
const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path={'/dialogs'} render={() =>
                    <Dialogs
                        state={props.state.dialogsPage}
                        messagesTextereaValue={props.state.dialogsPage.messageForNewMessage} //ПЕРЕДАЕМ ССЫЛКУ НА ИЗНАЧАЛЬНОЕ ЗНАЧЕНИЕ ПОЛЯ ВВОДА (Texterea)
                        addMessage={props.addMessage}
                        ChangeNewMessageCallback={ChangeNewMessageCallback}/>}/>
                <Route path={'/profile'} render={() =>
                    <Profile
                        state={props.state.profilePage}
                        message={props.state.profilePage.messageForNewPost}
                        addPostCallback={props.addPost}
                        ChangeNewTextCallback={ChangeNewTextCallback}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Setting/>}/>
            </div>
        </div>
    )

}
export default App;
