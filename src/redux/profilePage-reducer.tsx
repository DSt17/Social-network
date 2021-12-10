import {addMessageActionCreator, ChangeNewMessageCallbackActionCreator} from "./dialogsPage-reducer";

type ActionsTypes =  ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof ChangeNewTextCallbackActionCreator> |
    ReturnType<typeof ChangeNewMessageCallbackActionCreator> |
    ReturnType<typeof addMessageActionCreator>
type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
}

//-----------ACTION CREATOR-------- ФУНКЦИЯ КОТОРАЯ УПАКОВЫВАЕТ ДЛЯ НАС ACTION
export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
        // postMessage: postMessage
    } as const
}
export const ChangeNewTextCallbackActionCreator = (NewText: string) => {
    return {
        type: "CHANGE-NEW-TEXT-CALLBACK",
        NewText: NewText
    } as const
}


let initialState = {
    messageForNewPost: "",
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'it\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Data', likesCount: 11},
    ]
}

//ЕСЛИ СТЕЙТ НЕ ПРИХОДИТ В REDUCER, ИСПОЛЬЗУЕМ ПЕРВОНОЧАЛЬНЫЕ ДАННЫЕ... initialState

const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsTypes):ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            //ДЕЛАЕМ КОПИЮ СТЕЙТА ПРАВИЛО ИММУТАБЕЛЬНОСТИ,
            let stateMessage = state.messageForNewPost
            return {...state, posts: [...state.posts,{id: new Date().getTime(), message: stateMessage, likesCount: 0}],messageForNewPost:"" }
        case "CHANGE-NEW-TEXT-CALLBACK":
            return{...state,messageForNewPost:action.NewText}
        default:
            return state

    }

}

export default profilePageReducer