import {addPostActionCreator, ChangeNewTextCallbackActionCreator} from "./profilePage-reducer";


type MessageType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
export type ActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof ChangeNewTextCallbackActionCreator> |
    ReturnType<typeof ChangeNewMessageCallbackActionCreator> |
    ReturnType<typeof addMessageActionCreator>

export type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
    messageForNewMessage: string
}


//-----------ACTION CREATOR-------- ФУНКЦИЯ КОТОРАЯ УПАКОВЫВАЕТ ДЛЯ НАС ACTION
export const addMessageActionCreator = () => {
    return {
        type: "ADD-MESSAGE",
    } as const
}
export const ChangeNewMessageCallbackActionCreator = (NewMessage: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE-CALLBACK",
        NewMessage: NewMessage
    } as const
}

let initialState: DialogPageType = {
    messageForNewMessage: "",
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sacha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]
}

const dialogsPageReducer = (state: DialogPageType = initialState, action: ActionsTypes):DialogPageType => {
    switch (action.type) {
        case "CHANGE-NEW-MESSAGE-CALLBACK":
           return {...state,messageForNewMessage: action.NewMessage}
        case "ADD-MESSAGE":
            let body = state.messageForNewMessage
            return {...state,
                messageForNewMessage:"", messages:[...state.messages,{id: new Date().getTime(), message:body}],
            }
        default:
            return state
    }
}

export default dialogsPageReducer