import React from "react";
import {StoreType} from "../../redux/store";
import {addMessageActionCreator, ChangeNewMessageCallbackActionCreator} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";

type DialogsContainersPropsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsContainersPropsType) => {

    let state = props.store.getState().dialogsPage

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator(state.messageForNewMessage)) // ПУШИТ В МАССИВ СООБЩЕНИЙ НОВОЕ СООБЩЕНИЕ
        props.store.dispatch(ChangeNewMessageCallbackActionCreator("")) // МЕНЯЕТ ИЗНАЧАЛЬНОЕ ЗНАЧЕНИЕ НА ПУСТУЮ СТРОКУ
    }
    // МЕНЯЕМ ИЗНАЧАЛЬНОЕ ЗНАЧЕНИЕ НА ТЕКУЩЕЕ ЗНАЧЕНИЕ ВВОДА
    const newMessageChangeHandler = (text: string) => {
        props.store.dispatch(ChangeNewMessageCallbackActionCreator(text))
    }


    return (
        <Dialogs
            state={state}
            addMessage={addMessage}
            newMessageChangeHandler={newMessageChangeHandler}
            messagesTextareaValue={state.messageForNewMessage}
        />
    )
}

export default DialogsContainer;
