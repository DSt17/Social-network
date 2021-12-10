import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Dialogsitem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";



const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <Dialogsitem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)

    const OnAddMessage = () => {
        if(state.messageForNewMessage.trim() !== ""){
            props.addMessage()
        }

    }
    // МЕНЯЕМ ИЗНАЧАЛЬНОЕ ЗНАЧЕНИЕ НА ТЕКУЩЕЕ ЗНАЧЕНИЕ ВВОДА
    const AddNewMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newMessageChangeHandler(e.currentTarget.value)
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
                        value={state.messageForNewMessage}
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
