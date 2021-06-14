import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {headerAPI} from "../../api/api";

interface IUsersProps {
    data: {
        id: number | null
        login: string | null
        email: string | null
    }
    isAuth: boolean
    setAuthUserData: (data: {
        id: number | null
        login: string | null
        email: string | null
    }) => void
}

interface IUsersState {
}

class HeaderContainer extends React.Component<IUsersProps, IUsersState> {

    componentDidMount() {

     headerAPI.getHeader().then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data)
                }
            })
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
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)