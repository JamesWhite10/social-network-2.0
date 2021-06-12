import React, {useEffect} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {PostType, ProfileType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const ProfileContainer: React.FC<PropsType> = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${+ userId}`)
            .then(response => {
                props.setUserProfile(response.data)
            })
    }, [])

    return (
        <Profile {...props} profile={props.profile}/>
    )

}

    type MapStatePropsType = {
        profile: ProfileType | null
        posts: Array<PostType>
        newPostText: string
    }

    type MapDispatchPropsType = {
        setUserProfile: (profile: ProfileType) => void
    }

    type PathParamsType = {
        userId: string
    }

    type OwnPropsType = MapStatePropsType & MapDispatchPropsType

    let mapStateToProps = (state: AppStateType): MapStatePropsType => {
        return {
            profile: state.profilePage.profile,
            posts: state.profilePage.posts,
            newPostText: state.profilePage.newPostText
        }
    }

    let withUrlDataContainerComponent = withRouter(ProfileContainer)

    export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);