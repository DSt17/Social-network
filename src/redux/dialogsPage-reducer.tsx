import {addPostActionCreator} from "./profilePage-reducer";



type MessageType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
export type ActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof addMessageActionCreator>

export type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
}


//-----------ACTION CREATOR-------- ФУНКЦИЯ КОТОРАЯ УПАКОВЫВАЕТ ДЛЯ НАС ACTION
export const addMessageActionCreator = (newMessage: string) => {
    return {
        type: "ADD-MESSAGE",
        newMessage
    } as const
}

let initialState: DialogPageType = {
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

const dialogsPageReducer = (state: DialogPageType = initialState, action: ActionsTypes): DialogPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state, messages: [...state.messages, {id: new Date().getTime(), message: action.newMessage}],
            }
        default:
            return state
    }
}

export default dialogsPageReducer