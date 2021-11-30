import React from 'react';
import profilePageReducer, { addPostActionCreator, ChangeNewTextCallbackActionCreator } from "./profilePage-reducer";
import dialogsPageReducer, {addMessageActionCreator, ChangeNewMessageCallbackActionCreator} from "./dialogsPage-reducer";
import sidebarReducer from "./sidebar-reducer";

export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
}
export type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
    messageForNewMessage: string
}
export type StateType = {
    profilePage: {
        messageForNewPost: string,
        posts: { id: number, message: string, likesCount: number }[],
    }
    dialogsPage: {
        messageForNewMessage: string,
        messages: { id: number, message: string }[],
        dialogs: { id: number, name: string }[],
    }
    sidebar: {}
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =  ReturnType<typeof addPostActionCreator> |
                            ReturnType<typeof ChangeNewTextCallbackActionCreator> |
                            ReturnType<typeof ChangeNewMessageCallbackActionCreator> |
                            ReturnType<typeof addMessageActionCreator>



//-------BLL ------------------------------------------------------
export let store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'it\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Data', likesCount: 11},
            ],
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("state changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer //это паттерн НАБЛЮДАТЕЛЬ (observer)
    },


    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber()
    }
}







