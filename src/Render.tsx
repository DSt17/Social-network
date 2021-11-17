import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, ChangeNewMessageCallback, ChangeNewTextCallback, stateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

//Функция перерисовать все дерево
export let rerenderEntireThree = (state:stateType) => {
    ReactDOM.render(
        <BrowserRouter>
        <App state = {state}
             addPost={ addPost}
             addMessage={addMessage}
             ChangeNewMessageCallback={ChangeNewMessageCallback}
             ChangeNewTextCallback={ChangeNewTextCallback}
        />
        </BrowserRouter>,document.getElementById('root')
    );
}