import {connect} from "react-redux";
import {
    follow,
     getUsersThunkCreator,
    setCurrentPage,
    toggleFollowingProgress, unFollow,
    userType
} from "../../redux/usersPage-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component<usersPropsType, usersPropsType> {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.pageSize )
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                FollowingProgress={this.props.followingInProgress}
            />
        </>
    }
}


export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    users: Array<userType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


const usersContainer = connect(mapStateToProps, {
        follow: follow,
        unFollow: unFollow,
        setCurrentPage: setCurrentPage,
        toggleFollowingProgress: toggleFollowingProgress,
        getUsers: getUsersThunkCreator
    }
)
(UsersContainer)

export default usersContainer