import React from 'react';

type MessageType = {
    id: number
    message: string
}
type DialogsType = {
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



//-----------ACTION CREATOR--------
export const addPostActionCreator = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage:postMessage
    } as const
}
export const ChangeNewMessageCallbackActionCreator = (NewMessage: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE-CALLBACK",
        NewMessage: NewMessage
    } as const
}
export const ChangeNewTextCallbackActionCreator = (NewText: string) => {
    return {
        type: "CHANGE-NEW-TEXT-CALLBACK",
        NewText: NewText
    } as const
}
export const addMessageActionCreator = (message: string) => {
    return {
        type: "ADD-MESSAGE",
        message: message
    } as const
}


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

    dispatch(action) {     //[type: 'ADD-POST']
        if (action.type === "ADD-POST") {
            let newPost: PostType = {id: new Date().getTime(), message: action.postMessage, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber()
        } else if (action.type === "CHANGE-NEW-TEXT-CALLBACK") {
            this._state.profilePage.messageForNewPost = action.NewText;
            this._callSubscriber()
        } else if (action.type === "CHANGE-NEW-MESSAGE-CALLBACK") {
            this._state.dialogsPage.messageForNewMessage = action.NewMessage
            this._callSubscriber()
        } else if (action.type === "ADD-MESSAGE") {
            let newMessage: MessageType = {id: new Date().getTime(), message: action.message}
            this._state.dialogsPage.messages.push(newMessage)
            this._callSubscriber()
        }
    },
}







