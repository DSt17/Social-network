import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type postFormDataType = {
    newPostText: string
}

const MyPosts = (props: MyPostPropsType) => {

    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likesCount}/>)

    //value то что на придет когда форма засабмитится
    const onSubmit = (value: postFormDataType) => {
        if (value.newPostText !== "") {
            props.addPost(value.newPostText)
        }
    }
    return <div className={s.postsBlock}>
        <PostReduxForm onSubmit={onSubmit}/>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}




//  ВЫНЕСЛИ ФОРМУ ПОСТОВ В ОТДЕЛЬНУЮ КОМПОНЕНТУ и повешали обработчик событий onSubmit={props.handleSubmit}
const PostForm: React.FC<InjectedFormProps<postFormDataType>> = (props) => {
    return (
        <div>
            <h3>My post</h3>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={'textarea'} name={'newPostText'} placeholder={'...your post'}/>
                </div>
                <div>
                    <button> Add post</button>
                </div>
            </form>
        </div>
    )
}
const PostReduxForm = reduxForm<postFormDataType>({form: 'ProfileAddTextPostForm'})(PostForm)


export default MyPosts;