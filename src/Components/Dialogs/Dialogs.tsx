import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Dialogsitem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";
import {DialogPageType, StateType} from "../../redux/store";

type DialogsPropsType = {
    state: DialogPageType
    addMessage: () => void
    newMessageChangeHandler: (text: string) => void
    messagesTextareaValue: string
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.state

    let dialogsElements = state.dialogs.map(d => <Dialogsitem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)

    const OnAddMessage = () => {
        props.addMessage()
    }
    // МЕНЯЕМ ИЗНАЧАЛЬНОЕ ЗНАЧЕНИЕ НА ТЕКУЩЕЕ ЗНАЧЕНИЕ ВВОДА
    const AddNewMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.newMessageChangeHandler(text)
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
                        value={props.messagesTextareaValue} //ПРИХОДИТ ССЫЛКА НА ИЗНАЧАЛЬНОЕ ЗНАЧЕНИЕ ПОЛЯ ВВОДА => ""
                        onChange={AddNewMessageChangeHandler}
                        placeholder={"Enter your message"}
                    ></textarea>
                </div>
                <div>
                    <button onClick={OnAddMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
