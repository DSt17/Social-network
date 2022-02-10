import {headerAPI, usersAPI} from "../api/api";

export type ActionsTypes =
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setTotalCount> |
    ReturnType<typeof toggleFollowingProgress>


export type userType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
}
export type stateType = {
    users: Array<userType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}

let initialState: stateType = {
    users: [],
    pageSize: 20,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


//  AC - это сокращенно ActonCreator
export const followSuccess = (userID: number) => {
    return {
        type: "FOLLOW",
        userID: userID
    } as const
}
export const unfollowSuccess = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID: userID
    } as const
}
export const setUsers = (users: Array<userType>) => {
    return {
        type: "SET_USERS",
        users: users
    } as const

}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}
export const setTotalCount = (totalCount: number) => {
    return {
        type: "SET-TOTAL-COUNT",
        totalCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        isFetching,
        userId
    } as const
}


const usersPageReducer = (state = initialState, action: ActionsTypes): stateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            /* return{...state, users: state.users.map(el => el.id === action.userID ? {...el,followed:false} : el)}*/
            return {
                ...state, users: state.users.map(el => {
                    if (el.id === action.userID) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        case "SET_USERS":
            return {...state, users: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state, followingInProgress: action.isFetching
                    ?
                    [...state.followingInProgress, action.userId]
                    :
                    [state.followingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state
    }
}


//thunk
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {

    return (dispatch: any) => {

        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount))
            })
    }
}


export const follow = (Userid: number) => {

    return (dispatch: any) => {

        dispatch(toggleFollowingProgress(true, Userid))
        usersAPI.Follow(Userid)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(Userid))
                }
                dispatch(toggleFollowingProgress(false, Userid))
            })
    }
}

export const unFollow = (UserId: number) => {

    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, UserId))
        usersAPI.unFollow(UserId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(UserId))
                }
                dispatch(toggleFollowingProgress(false, UserId))
            })
    }
}




export default usersPageReducer