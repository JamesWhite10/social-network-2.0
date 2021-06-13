import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

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

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {data} = response.data.data
                    this.props.setAuthUserData(data)
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