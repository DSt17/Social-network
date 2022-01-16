import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {SetUserProfile} from "../../redux/profilePage-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


class ProfileContainer extends React.Component<ProfilePageType, ProfilePageType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.SetUserProfile(response.data)
                debugger;
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

export type ProfilePageType = mapDispatchToPropsType & mapStateToPropsType

export type mapDispatchToPropsType = {
    SetUserProfile: (Profile:[]) => void
}


export type mapStateToPropsType = {
    profile:[]
}

let mapStateToProps = (state:AppStateType) => ({
    profile: state.profilePage.profile
})


export default connect (mapStateToProps, {SetUserProfile:SetUserProfile})(ProfileContainer);