import React from 'react';
import {rerenderEntireThree} from "../Render";

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
    messageForNewMessage:string
}
type SidebarType = {}
export type stateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


//BLL -------------------------------------------------------------------
export let state: stateType = {
    profilePage: {
        messageForNewPost: "",
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'it\'s my first post', likesCount: 11 },
            { id: 3, message: 'Blabla', likesCount: 11 },
            { id: 4, message: 'Data', likesCount: 11 },
        ],
    },
    dialogsPage: {
        messageForNewMessage: "",
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your it-kamasutra?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
        ],
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrew' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sacha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }
        ]
    },
    sidebar: {}
}

export const addPost = (postMessage: string) => {
    const newPost:PostType = {id: new Date().getTime() , message: postMessage, likesCount: 0}
    state.profilePage.posts.push(newPost)
    rerenderEntireThree(state)
}

export const addMessage = (message:string) =>{
    const newMessage:MessageType =  { id: new Date().getTime(), message:message }
    state.dialogsPage.messages.push(newMessage)
    rerenderEntireThree(state)
}

export const ChangeNewMessageCallback = (NewMessage:string) => {
    state.dialogsPage.messageForNewMessage = NewMessage
    rerenderEntireThree(state)
}
export const ChangeNewTextCallback = (NewText:string) => {
state.profilePage.messageForNewPost = NewText;
rerenderEntireThree(state)
}

export default state;