import {ActionsTypes, DialogPageType,  MessageType} from "./store";

//-----------ACTION CREATOR-------- ФУНКЦИЯ КОТОРАЯ УПАКОВЫВАЕТ ДЛЯ НАС ACTION
export const addMessageActionCreator = (message: string) => {
    return {
        type: "ADD-MESSAGE",
        message: message
    } as const
}
export const ChangeNewMessageCallbackActionCreator = (NewMessage: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE-CALLBACK",
        NewMessage: NewMessage
    } as const
}


let initialState = {
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

 const dialogsPageReducer = (state:DialogPageType = initialState, action:ActionsTypes) => {
     switch (action.type){
         case "CHANGE-NEW-MESSAGE-CALLBACK":
             state.messageForNewMessage = action.NewMessage
            return state
         case "ADD-MESSAGE": let newMessage: MessageType = {id: new Date().getTime(), message: action.message}
             state.messages.push(newMessage)
             return state

         default: return state
     }
}

export default dialogsPageReducer