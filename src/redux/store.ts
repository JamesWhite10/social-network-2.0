import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export let store: StoreType = {
    _state: {
        profilePage: {
            profile: null,
            posts: [
                {id: 1, message: "Hi, how are you?", likeCount: 23},
                {id: 2, message: "It's my first Post!!", likeCount: 58},
                {id: 3, message: "Are you ready....", likeCount: 17}
            ],
            newPostText: "it-max.com"
        },
        dialogsPage: {
            dialogs:[
                {id: 1, name: "Anna", avatar: "https://sefon.pro/img/artist_photos/ava-max.jpg"},
                {id: 2, name: "Max", avatar: "https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/d2/27/7b/d2277b15-bd32-0545-920e-8efc1767fc25/source/512x512bb.jpg"},
                {id: 3, name: "Ben", avatar: "https://narcosis-css.ru/800/600/http/pristor.ru/wp-content/uploads/2017/06/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B8-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B2-%D0%AE%D1%82%D1%83%D0%B1-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-15.jpg"},
                {id: 4, name: "Alice", avatar: "https://hypeava.ru/uploads/posts/2018-05/1527186697_5.png"},
                {id: 5, name: "Den", avatar: "https://instagram-my.ru/wp-content/uploads/2019/11/avainsta14.jpg"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Yo!!!"},
                {id: 3, message: "How is your playing basketball?"},
                {id: 4, message: "Yo!!!"},
                {id: 5, message: "Yo!!!"}
            ],
            newMessageText: ""
        },
        sidebar: {
            friends: [
                {id: 1, name: "Patrik", image: "https://img2.freepng.ru/20180318/wye/kisspng-derrick-rose-chicago-bulls-nba-draft-cleveland-cav-derrick-rose-cliparts-5aae255e6d7772.9388071515213622704484.jpg"},
                {id: 2, name: "Ann", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlcU4bXsUHvbehYhD3UtlJWivLmu_7DOQ8Vw&usqp=CAU"},
                {id: 3, name: "Oliver", image: "https://i.pinimg.com/originals/40/96/e1/4096e11a4e50eb8551db700a8aa96ba7.jpg"}
            ]
        }
    },
    _callSubscriber () {
        console.log("State changed")
    },

    getState() {
       return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();
    }
}

export type StoreType = {
    _state: RootStateType,
    _callSubscriber: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => RootStateType,
    dispatch: (action: ActionsType) => void
}

export type ActionsType = AddPostActionType | UpdateNewPostActionType
    | AddMessageActionType | UpdateNewMessageActionType
    | FollowActionType | UnFollowActionType
    | SetUsersActionType | SetCurrentPageType | SetTotalUsersCountType
    | SetIsFetchingType | SetUserProfileType | SetUserData

export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}

export type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPost: string
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    newMessageText: string
}

export type UpdateNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessage: string
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

export type SetUserData = {
    type: "SET-USER-DATA"
    data: {
        id: number | null
        login: string | null
        email: string | null
    }
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

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type ProfilePageType = {
    profile: ProfileType | null
    posts: Array<PostType>
    newPostText: string
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

export type SidebarType = {
    friends: Array<FriendsType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}