
import {addPostActionCreator} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


export type MyPostPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    posts: { id: number, message: string, likesCount: number }[]
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

type mapDispatchToPropsType = {
    addPost: (textPost:string) => void
}
let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        addPost: (textPost:string) => {
            dispatch(addPostActionCreator(textPost))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;