import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

type initialStateType = {
    userId: null | string,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

let initialState:initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}



export type ActionsTypes = ReturnType<typeof setAuthUserData>

const authReducer = (state = initialState, action: ActionsTypes):initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }

}

//AC
export const setAuthUserData = (userId: string, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    }
}

//thunkCreator
export const getAuthUserData = () => {
    return (dispatch:any) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch (setAuthUserData(id, email, login))
                }
            })
    }
}

export default authReducer