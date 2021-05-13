import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css"
import {Posts} from "./Post/Post";
import {ActionsType, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements =
        props.posts.map(p => <Posts key={p.id} message={p.message} likeCount={p.likeCount}/>)

    const addPost = () => {
            props.dispatch(addPostActionCreator(props.newPostText));
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}