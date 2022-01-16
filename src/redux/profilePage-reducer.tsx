import {addMessageActionCreator, ChangeNewMessageCallbackActionCreator} from "./dialogsPage-reducer";


type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof ChangeNewTextCallbackActionCreator> |
    ReturnType<typeof ChangeNewMessageCallbackActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof SetUserProfile>

type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
    profile: []

}
export type SetUserProfile = {
    type: "SET-USER-PROFILE"
    Profile: []
}
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
export const SetUserProfile = (Profile: []) => {
    return {
        type: "SET-USER-PROFILE",
        Profile
    }as const

}


let initialState: ProfilePageType = {
    messageForNewPost: "",
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'it\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Data', likesCount: 11},
    ],
    profile: [],

}


const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let stateMessage = state.messageForNewPost
            return {
                ...state,
                posts: [...state.posts, {id: new Date().getTime(), message: stateMessage, likesCount: 0}],
                messageForNewPost: ""
            }
        case "CHANGE-NEW-TEXT-CALLBACK":
            return {...state, messageForNewPost: action.NewText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.Profile}
        default:
            return state
    }

}

export default profilePageReducer