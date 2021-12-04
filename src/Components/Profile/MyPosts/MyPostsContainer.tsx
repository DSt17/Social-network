import React from "react";
import { StoreType} from "../../../redux/store";
import {addPostActionCreator, ChangeNewTextCallbackActionCreator} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
    store:StoreType
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {

   let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator(props.store.getState().profilePage.messageForNewPost) )
        props.store.dispatch(ChangeNewTextCallbackActionCreator(""))
    }
    const ChangeNewTextCallback = (text: string) => {
        props.store.dispatch(ChangeNewTextCallbackActionCreator(text))
    }

    return (
        <MyPosts ChangeNewTextCallback={ChangeNewTextCallback}
                 addPost={addPost}
                 message={state.profilePage.messageForNewPost}
                 posts={state.profilePage.posts}

        />
    )
}
export default MyPostsContainer;