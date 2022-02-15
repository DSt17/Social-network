import React, {useEffect} from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profilePage-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


type PathParamsType = {
    userId: string
}
type mapStatePropsType = {
    profile: object,
}
type mapDispatchPropsType = {
    getUserProfile:(userId:string) => void
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = mapStatePropsType & mapDispatchPropsType

function ProfileContainer(props: PropsType) {

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {userId = "2"}
        props.getUserProfile(userId)
    }, [])

    return (
        <Profile profile={props.profile}/>

    )
}






let mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile,
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default WithAuthRedirect( connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent));