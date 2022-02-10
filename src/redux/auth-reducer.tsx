import {headerAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export type ActionsTypes = ReturnType<typeof setAuthUserData>

const authReducer = (state = initialState, action: ActionsTypes) => {
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
export const setAuthUserData = (userId: number, email: string, login: string) => {
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
export const getHeader = () => {
    return (dispatch:any) => {
        headerAPI.getHeader()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch (setAuthUserData(id, email, login))
                }
            })
    }
}

export default authReducer