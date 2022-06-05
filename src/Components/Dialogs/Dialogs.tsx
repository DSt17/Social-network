import s from './Dialogs.module.css'
import DialogsItem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import  {reduxForm, Field, InjectedFormProps} from "redux-form";

type DialogAddMessageForm = {
    newMessageBody: string
}


const Dialogs = (props: DialogsPropsType) => {

    const onSubmit = (formData: DialogAddMessageForm) => {
        if(formData.newMessageBody !== ""){
            props.addMessage(formData.newMessageBody)
        }
        console.log(formData)
    }

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d =>
        <DialogsItem
            name={d.name}
            id={d.id}/>)

    let messagesElements = state.messages.map(m =>
        <Message
            message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={onSubmit}/>
            </div>
        </div>
    )
}


const AddMessageForm: React.FC<InjectedFormProps<DialogAddMessageForm>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Enter message..'} name={'newMessageBody'} component={'textarea'}/>
        </div>
        <div>
            <button>Add message</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm<DialogAddMessageForm>({form: 'DialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
