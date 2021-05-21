import {ActionsType, AddPostActionType, PostType, UpdateNewPostActionType} from "./store";

type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
}

const initialState: InitialStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 23},
        {id: 2, message: "It's my first Post!!", likeCount: 58},
        {id: 3, message: "Are you ready....", likeCount: 17}
    ],
    newPostText: "it-max.com"
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = state.newPostText
            return {
                ...state,
                posts: [...state.posts, {id: 4, message: newPost, likeCount: 0}],
                newPostText: ""
            }
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newPost
            }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string): AddPostActionType => ({
    type: "ADD-POST",
    newPostText: newPostText
})

export const updateNewPostTextActionCreator = (newPost: string): UpdateNewPostActionType => ({
    type: "UPDATE-NEW-POST-TEXT",
    newPost: newPost
})

export default profileReducer;