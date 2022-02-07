import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {SetUserProfile} from "../../redux/profilePage-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}
type mapStatePropsType = {
    profile: any
}
type mapDispatchPropsType = {
    SetUserProfile: (profile: any) => void
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = mapStatePropsType & mapDispatchPropsType

function ProfileContainer(props: PropsType) {

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = "2"
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                props.SetUserProfile(response.data)

            })
    }, [])

    return (
        <Profile profile={props.profile}/>

    )
}


let mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {SetUserProfile: SetUserProfile})(withUrlDataContainerComponent);