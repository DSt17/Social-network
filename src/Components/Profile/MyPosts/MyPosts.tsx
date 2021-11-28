import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsTypes, addPostActionCreator, ChangeNewTextCallbackActionCreator, PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[];
    dispatch: (action: ActionsTypes) => void
    message: string
}


const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator(props.message) )
        props.dispatch(ChangeNewTextCallbackActionCreator("") )
    }
    const NewTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(ChangeNewTextCallbackActionCreator((e.currentTarget.value)))


    }
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea value={props.message} onChange={NewTextChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={addPost}> Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;