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
        let userId = props.match.params.userId || null
        if (!userId) {
            userId = props.authorizedUserId
            if (!userId) {
               return;
            }
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
    status: string | null
    authorizedUserId: string | null
    isAuth: boolean | null
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string | null) => void
    getUserStatus: (userId: string | null) => void
    updateStatus: (status: string) => void
}

type PathParamsType = {
    userId: string | undefined
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType> (
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)