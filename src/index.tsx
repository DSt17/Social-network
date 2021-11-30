import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

//Функция перерисовать все дерево
 let rerenderEntireThree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                 state = {store.getState()}
                 dispatch ={store.dispatch.bind(store)}
            />
        </BrowserRouter>,document.getElementById('root')
    );
}

rerenderEntireThree()

//функция колбек (В ФУНКЦИЮ ПЕРЕДАЕМ ФУНКЦИЮ)вызвали функцию из state.tsx для передачи rerenderEntireThree чтобы там ее кто-то вызвал
store.subscribe(rerenderEntireThree)






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
