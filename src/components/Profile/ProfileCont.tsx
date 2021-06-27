import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setProfile} from "../../redux/profile-reducer";
import {PostType, ProfileType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const ProfileContainer: React.FC<PropsType> = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        props.setProfile(userId)
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
        setProfile: (userId: string) => void
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

    export default connect(mapStateToProps, {setProfile})(withUrlDataContainerComponent);