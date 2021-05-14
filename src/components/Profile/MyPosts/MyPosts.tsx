import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css"
import {Posts} from "./Post/Post";
import {PostType} from "../../../redux/store";


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    onPostChange: (post: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements =
        props.posts.map(p => <Posts key={p.id} message={p.message} likeCount={p.likeCount}/>)

    const onAddPost = () => {
            props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let post = e.currentTarget.value
        props.onPostChange(post)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}