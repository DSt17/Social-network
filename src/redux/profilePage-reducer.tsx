import {ActionsTypes, PostType, ProfilePageType,} from "./state";

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


const profilePageReducer = (state: ProfilePageType, action: ActionsTypes) => {
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