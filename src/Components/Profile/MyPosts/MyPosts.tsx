import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";

export type MyPostsPropsType = {
    addPost: () => void
    ChangeNewTextCallback: (text: string) => void
    message: string
    posts: PostType[];
}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likesCount}/>)


    const OnAddPost = () => {
        props.addPost()
    }
    const NewTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
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
                    <button onClick={OnAddPost}> Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;