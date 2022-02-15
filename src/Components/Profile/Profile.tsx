 import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
 import {Redirect} from "react-router-dom";

type ProfilePropsType = {
    profile:object,
}

const Profile = (props: ProfilePropsType ) => {


    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;