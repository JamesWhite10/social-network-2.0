import {ActionsType, FriendsType} from "./store";

type InitialStateType = {
    friends: Array<FriendsType>
}

const initialState: InitialStateType = {
    friends: [
        {id: 1, name: "Patrik", image: "https://img2.freepng.ru/20180318/wye/kisspng-derrick-rose-chicago-bulls-nba-draft-cleveland-cav-derrick-rose-cliparts-5aae255e6d7772.9388071515213622704484.jpg"},
        {id: 1, name: "Ann", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlcU4bXsUHvbehYhD3UtlJWivLmu_7DOQ8Vw&usqp=CAU"},
        {id: 1, name: "Oliver", image: "https://i.pinimg.com/originals/40/96/e1/4096e11a4e50eb8551db700a8aa96ba7.jpg"}
    ]
}

const sidebarReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {


    return state
}

export default sidebarReducer;