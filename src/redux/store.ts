export type ActionsType = AddPostActionType | AddMessageActionType | FollowActionType | UnFollowActionType
    | SetUsersActionType | SetCurrentPageType | SetTotalUsersCountType
    | SetIsFetchingType | SetUserProfileType | SetUserData
    | SetIsFollowingInProgressType | SetStatusType | SetInitializedType

export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    newMessageText: string
}

export type FollowActionType = {
    type: "FOLLOW"
    userId: number
}

export type UnFollowActionType = {
    type: "UN-FOLLOW"
    userId: number
}

export type SetUsersActionType = {
    type: "SET-USERS"
    users: Array<UsersType>
}

export type SetCurrentPageType = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}

export type SetTotalUsersCountType = {
    type: "SET-TOTAL-USERS-COUNT"
    totalUsersCount: number
}

export type SetIsFetchingType = {
    type: "TOGGLE-IS-FETCHING"
    isFetching: boolean
}

export type SetUserProfileType = {
    type: "SET-USER-PROFILE",
    profile: ProfileType
}

export type SetIsFollowingInProgressType = {
    type: "TOGGLE-IS-FOLLOWING-PROGRESS"
    followingInProgress: boolean
    userId: number
}

export type SetUserData = {
    type: "SET-USER-DATA"
    payload: {
        id: string | null
        email: string | null
        login: string | null
        isAuth: boolean | null
    }
}

export type SetStatusType = {
    type: "SET-STATUS"
    status: string
}

export type SetInitializedType = {
    type: "SET-INITIALIZED"
    initialized: boolean
}

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
    avatar: string
}

export type PostType = {
    id: number
    message: string
    likeCount: number
}

export type FriendsType = {
    id: number
    name: string
    image: string
}

export type UsersType = {
    id: number
    photos: {
        small: string | undefined
        large: string | undefined
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}

export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string | null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string | null,
        github: string,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number | string,
    photos: {
        small: string,
        large: string
    }
}