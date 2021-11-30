import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Dialogsitem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";
import {
    ActionsTypes,

    StateType
} from "../../redux/state";
import {addMessageActionCreator, ChangeNewMessageCallbackActionCreator} from "../../redux/dialogsPage-reducer";

type DialogsPropsType = {
    state: StateType
    messagesTextereaValue: string
    dispatch: (action: ActionsTypes) => void

}

const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.state.dialogsPage.dialogs.map(d => <Dialogsitem name={d.name} id={d.id}/>)
    let messagesElements = props.state.dialogsPage.messages.map(m => <Message message={m.message}/>)

    let addMessage = () => {
        props.dispatch(addMessageActionCreator(props.messagesTextereaValue)) // ПУШИТ В МАССИВ СООБЩЕНИЙ НОВОЕ СООБЩЕНИЕ
        props.dispatch(ChangeNewMessageCallbackActionCreator("")) // МЕНЯЕТ ИЗНАЧАЛЬНОЕ ЗНАЧЕНИЕ НА ПУСТУЮ СТРОКУ
    }
    const newMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => { // МЕНЯЕМ ИЗНАЧАЛЬНОЕ ЗНАЧЕНИЕ НА ТЕКУЩЕЕ ЗНАЧЕНИЕ ВВОДА
        props.dispatch(ChangeNewMessageCallbackActionCreator(e.currentTarget.value))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea
                        value={props.messagesTextereaValue} //ПРИХОДИТ ССЫЛКА НА ИЗНАЧАЛЬНОЕ ЗНАЧЕНИЕ ПОЛЯ ВВОДА => ""
                        onChange={newMessageChangeHandler}
                        placeholder={"Enter your message"}
                    ></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
