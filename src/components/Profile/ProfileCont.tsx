import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import {PostType, ProfileType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const ProfileContainer: React.FC<PropsType> = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = "17363"
        }
        props.getUserProfile(userId)
        props.getUserStatus(userId)
    }, [])


    return (
        <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    )

}

type MapStatePropsType = {
    profile: ProfileType | null
    posts: Array<PostType>
    newPostText: string
    status: string | null
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

type PathParamsType = {
    userId: string
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType> (
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)