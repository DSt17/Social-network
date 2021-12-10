
import {addPostActionCreator, ChangeNewTextCallbackActionCreator} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


export type MyPostPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    posts: { id: number, message: string, likesCount: number }[]
    message: string
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        message: state.profilePage.messageForNewPost
    }
}

type mapDispatchToPropsType = {
    addPost: () => void
    ChangeNewTextCallback:(text:string) => void
}
let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        ChangeNewTextCallback: (text: string) => {
            dispatch(ChangeNewTextCallbackActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;