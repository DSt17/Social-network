import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, userType} from "../../redux/usersPage-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    users:Array<userType>
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
       users: state.usersPage.users
    }
}

type mapDispatchToPropsType = {
    follow: (userID:number) => void
    unFollow: (userID:number) => void
    setUsers:(users:Array<userType>) => void
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userID:number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID:number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default usersContainer