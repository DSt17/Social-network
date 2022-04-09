import {addMessageActionCreator, ChangeNewMessageCallbackActionCreator} from "./dialogsPage-reducer";
import {ProfileAPI, usersAPI} from "../api/api";


type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof ChangeNewTextCallbackActionCreator> |
    ReturnType<typeof ChangeNewMessageCallbackActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof SetUserProfile> |
    ReturnType<typeof SetStatus> |
    ReturnType<typeof UpdateStatus>

type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
    profile: []
    status: string

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
const SetUserProfile = (Profile: []) => {
    return {
        type: "SET-USER-PROFILE",
        Profile
    } as const
}
const SetStatus = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}
const UpdateStatus = (status: string) => {
    return {
        type: "UPDATE-STATUS",
        status
    } as const
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
    status: ""

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
        case "SET-STATUS":
            return {...state, status: action.status}
        case "UPDATE-STATUS":
            return {...state, status: action.status}
        case "SET-USER-PROFILE":
            return {...state, profile: action.Profile}
        default:
            return state
    }

}


//Thunk
export const getUserProfile = (userId: string) => {
    return (dispatch: any) => {
        usersAPI.getUserProfile(userId)
            .then(response => {
                dispatch(SetUserProfile(response.data))
            })
    }
}

export const getStatus = (userId: string) => {
    return (dispatch: any) => {
        ProfileAPI.getStatus(userId)
            .then(response => {
                dispatch(SetStatus(response.data))
            })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: any) => {
        ProfileAPI.updateStatus(status)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(UpdateStatus(status))
                }
            })
    }
}

export default profilePageReducer