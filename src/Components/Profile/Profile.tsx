 import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
 import {Redirect} from "react-router-dom";

type ProfilePropsType = {
    profile:object,
    status: string,
    updateStatus: (status: string) => void

}

const Profile = (props: ProfilePropsType ) => {


    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus ={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;