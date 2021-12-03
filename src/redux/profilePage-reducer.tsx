import {ActionsTypes, PostType, ProfilePageType,} from "./store";

//-----------ACTION CREATOR-------- ФУНКЦИЯ КОТОРАЯ УПАКОВЫВАЕТ ДЛЯ НАС ACTION
export const addPostActionCreator = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage:postMessage
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
const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type){
        case "ADD-POST":
            let newPost: PostType = {id: new Date().getTime(), message: action.postMessage, likesCount: 0}
            state.posts.push(newPost)
            return state
        case "CHANGE-NEW-TEXT-CALLBACK":  state.messageForNewPost = action.NewText;
            return state

        default:
            return state
    }

}

export default profilePageReducer