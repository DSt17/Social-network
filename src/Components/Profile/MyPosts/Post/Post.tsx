import React from "react";
import s from "./Post.module.css"
type PostType = {
    message: string
    likeCounts: number
    key:number
}

const Post = (props: PostType) => {
    return (
        <div key={props.key} className={s.item}>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtU8DcpxLJ2NVPvoopnuZWtlMKkXhmqz0Yg&usqp=CAU"}/>
            <span>{props.message}</span>
            <div>
                <span>Like<span> {props.likeCounts}</span></span>
            </div>
        </div>
    )
}
export default Post;