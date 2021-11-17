import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Dialogsitem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogPageType
    addMessage: (message: string) => void
    ChangeNewMessageCallback: (NewMessage: string) => void
    messagesTextereaValue: string
}
const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.state.dialogs.map(d => <Dialogsitem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let addMessage = () => {
            props.addMessage(props.messagesTextereaValue) // ПУШИТ В МАССИВ СООБЩЕНИЙ НОВОЕ СООБЩЕНИЕ
            props.ChangeNewMessageCallback("") // МЕНЯЕТ ИЗНАЧАЛЬНОЕ ЗНАЧЕНИЕ НА ПУСТУЮ СТРОКУ


    }
    const newMessageChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => { // МЕНЯЕМ ИЗНАЧАЛЬНОЕ ЗНАЧЕНИЕ НА ТЕКУЩЕЕ ЗНАЧЕНИЕ ВВОДА
        props.ChangeNewMessageCallback(e.currentTarget.value)}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea
                        value={props.messagesTextereaValue} //ПРИХОДИТ ССЫЛКА НА ИЗНАЧАЛЬНОЕ ЗНАЧЕНИЕ ПОЛЯ ВВОДА => ""
                        onChange={newMessageChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;