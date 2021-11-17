import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[];
    addPostCallback: (postMessage: string) => void
    ChangeNewTextCallback: (NewText: string) => void
    message: string
}
const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likesCount}/>)

    const addPost = () => {
        props.addPostCallback(props.message)
        props.ChangeNewTextCallback("")
    }
    const NewTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.ChangeNewTextCallback(e.currentTarget.value)
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