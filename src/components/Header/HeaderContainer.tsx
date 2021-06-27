import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

interface IUsersProps {
    data: {
        id: number | null
        login: string | null
        email: string | null
    }
    isAuth: boolean
    setUserData: () => void
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
    data: {
        id: number | null
        login: string | null
        email: string | null
    }
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({data: state.auth.data, isAuth: state.auth.isAuth})
export default connect(mapStateToProps, {setUserData})(HeaderContainer)