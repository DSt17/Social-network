
export type ActionsTypes =  ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>

export type userType = {
    id: number
    photoUrl:string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}
export type stateType = {
    users: Array<userType>

}

let initialState:stateType = {
    users: []
}

    //  AC - это сокращенно ActonCreator
export const followAC = (userID:number) => {
    return{
        type: "FOLLOW",
        userID:userID
    } as const
}
export const unfollowAC = (userID:number) => {
    return{
        type: "UNFOLLOW",
        userID:userID
    } as const
}
export const setUsersAC = (users:Array<userType>) => {
    return{
        type:"SET_USERS",
        users:users
    } as const

}


const usersPageReducer = (state = initialState, action: ActionsTypes):stateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => {
                    if (el.id === action.userID) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        case "UNFOLLOW":
           /* return{...state, users: state.users.map(el => el.id === action.userID ? {...el,followed:false} : el)}*/
            return{...state, users: state.users.map(el => {
                if(el.id === action.userID){
                    return{...el,followed: false}
                }
                return el
            })
            }
        case "SET_USERS":
            return {...state, users: [...state.users,...action.users ]}

        default:
            return state
    }
}
export default usersPageReducer