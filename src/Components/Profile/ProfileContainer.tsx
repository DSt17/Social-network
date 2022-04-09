import React, {useEffect} from "react";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profilePage-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}
type mapStatePropsType = {
    profile: object,
    status: string
}
type mapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void

}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = mapStatePropsType & mapDispatchPropsType

function ProfileContainer(props: PropsType) {

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        props.getUserProfile(userId)
        props.getStatus(userId)
    }, [])

    return (
        <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>

    )
}


let mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    //
)(ProfileContainer)