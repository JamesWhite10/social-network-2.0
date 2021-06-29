import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import store, {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {PostType} from "../../../redux/store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}

type MapDispatchPropsType = {
    addPost: () => void
    onPostChange: (message: string) => void
}

export type MyPostPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            let state = store.getState().profilePage.newPostText
            dispatch(addPost(state))
        },
        onPostChange: (post: string) => {
            dispatch(updateNewPostText(post))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer