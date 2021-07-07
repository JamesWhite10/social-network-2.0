import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logOut, setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

interface IUsersProps {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
    setUserData: () => void
    logOut: () => void
}

interface IUsersState {
}

class HeaderContainer extends React.Component<IUsersProps, IUsersState> {

    componentDidMount() {
        this.props.setUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStatePropsType = {
    id: number | null
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
export default connect(mapStateToProps, {setUserData, logOut})(HeaderContainer)