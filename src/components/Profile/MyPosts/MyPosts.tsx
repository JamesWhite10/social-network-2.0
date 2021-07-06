import React from "react";
import classes from "./MyPosts.module.css"
import {Posts} from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormControls/FormsControls";
import {Dispatch} from "redux";

export function MyPosts(props: MyPostPropsType) {

    let postsElements =
        props.posts.map(p => <Posts key={p.id} message={p.message} likeCount={p.likeCount}/>)

    const addNewPost = (values: FormDataType, dispatch: Dispatch) => {
        props.addPost(values.newPostText)
        dispatch(reset("profileAddPostForm"))
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

const maxLength30 = maxLengthCreator(30)

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newPostText"
                       placeholder="New post"
                       validate={[required, maxLength30]}/>
            </div>
            <button>Add post</button>
        </form>
    )
}
const AddPostReduxForm = reduxForm<FormDataType>({form: "profileAddPostForm"})(AddPostForm)