import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";
import {StoreReduxType} from "../../../redux/redux-store";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store: StoreReduxType) => {

                    let state = store.getState()

                    const addPost = () => {
                        store.dispatch(addPostActionCreator(state.profilePage.newPostText));
                    }

                    const onPostChange = (post: string) => {
                        store.dispatch(updateNewPostTextActionCreator(post))
                    }
                    return <MyPosts
                        addPost={addPost}
                        onPostChange={onPostChange}
                        newPostText={state.profilePage.newPostText}
                        posts={state.profilePage.posts}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer