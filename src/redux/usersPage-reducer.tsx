
export type ActionsTypes =
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage>|
    ReturnType<typeof toggleIsFetching>|
    ReturnType<typeof setTotalCount>

export type userType = {
    id: number
    photos:{
        small:string
        large:string
    }
    // photoUrl:string
    followed: boolean
    name:string
    // fullName: string
    status: string
    // location: {
    //     city: string
    //     country: string
    // }
}
export type stateType = {
    users: Array<userType>
    pageSize: number
    totalCount:number
    currentPage:number
    isFetching:boolean

}




let initialState:stateType = {
    users: [],
    pageSize: 20,
    totalCount: 0,
    currentPage: 1,
    isFetching:false

}


    //  AC - это сокращенно ActonCreator
export const follow = (userID:number) => {
    return{
        type: "FOLLOW",
        userID:userID
    } as const
}
export const unfollow = (userID:number) => {
    return{
        type: "UNFOLLOW",
        userID:userID
    } as const
}
export const setUsers = (users:Array<userType>) => {
    return{
        type:"SET_USERS",
        users:users
    } as const

}
export const setCurrentPage =(currentPage:number)=>{
  return{
      type:"SET-CURRENT-PAGE",
      currentPage
  } as const
}
export const setTotalCount = (totalCount:number)=>{
    return{
        type: "SET-TOTAL-COUNT",
        totalCount
    } as const
}
export const toggleIsFetching = (isFetching:boolean) =>{
return{
    type: "TOGGLE-IS-FETCHING",
    isFetching
} as const
}



const usersPageReducer = (state = initialState, action: ActionsTypes):stateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el ) }
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
            return {...state, users: [...action.users ]}
        case "SET-CURRENT-PAGE":
            return{...state, currentPage:action.currentPage}
        case "SET-TOTAL-COUNT":
            return{...state, totalCount:action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state,isFetching:action.isFetching}
        default:
            return state
    }
}
export default usersPageReducer