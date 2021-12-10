import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";



const MyPosts = (props: MyPostPropsType) => {

    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likesCount}/>)

    const OnAddPost = () => {
        if(props.message.trim() !== ""){
            props.addPost()
        }

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