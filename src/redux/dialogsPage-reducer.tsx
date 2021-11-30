import {ActionsTypes, DialogPageType, MessageType} from "./state";

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



 const dialogsPageReducer = (state:DialogPageType, action:ActionsTypes) => {
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