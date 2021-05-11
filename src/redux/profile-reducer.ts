import {ActionsType, AddPostActionType, PostType, ProfilePageType, UpdateNewPostActionType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionsType) => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: 4,
                message: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newPost
            return state
        default: return state
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