import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

interface IUsersProps {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean | null
    logOut: () => void
}

interface IUsersState {
}

class HeaderContainer extends React.Component<IUsersProps, IUsersState> {

    render() {
        return <Header {...this.props}/>
    }
}

type MapStatePropsType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {logOut})(HeaderContainer)