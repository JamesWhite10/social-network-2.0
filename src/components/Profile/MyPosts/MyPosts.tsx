import React from "react";
import classes from "./MyPosts.module.css"
import {Posts} from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export function MyPosts (props: MyPostPropsType) {

    let postsElements =
        props.posts.map(p => <Posts key={p.id} message={p.message} likeCount={p.likeCount}/>)

    const addNewPost = (values: FormDataType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <AddPostReduxForm onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

type FormDataType = {
    newPostText: string
}

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" placeholder="New post"/>
            </div>
            <button>Add post</button>
        </form>
    )
}
const AddPostReduxForm = reduxForm<FormDataType>({form: "profileAddPostForm"})(AddPostForm)