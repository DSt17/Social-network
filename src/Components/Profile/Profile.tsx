import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ChangeNewTextCallback, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state:ProfilePageType
    addPostCallback:(postMessage:string) => void
    message:string
    ChangeNewTextCallback:(NewText:string) => void
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     addPostCallback ={props.addPostCallback}
                     message={props.message}
                     ChangeNewTextCallback={props.ChangeNewTextCallback}/>
        </div>
    )
}

export default Profile;