import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";


type MyPostsContainerType = {
    store: StoreType
}

const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {

    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator(state.profilePage.newPostText));
    }

   const onPostChange = (post: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(post))
    }

    return (
        <MyPosts
            addPost={addPost}
            onPostChange={onPostChange}
            newPostText={state.profilePage.newPostText}
            posts={state.profilePage.posts}/>
    )
}

export default MyPostsContainer