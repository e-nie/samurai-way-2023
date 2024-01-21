import React from 'react';
import axios from 'axios'

import Header from "./Header";
import {connect} from "react-redux";
import {InitialStateType, setAuthUserData, setAuthUserDataType} from "../../redux/auth-reducer";
import {AppStatetype} from "../../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null

}

type MapDispatchToPropsType = {
    setAuthUserData: (id: string, email: string, login: string) => void
}

export type PropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me}`, {withCredentials: true})
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data
                    this.props.setAuthUserData(id, email, login)                }

            })
    }

    render() {
        return <>
            <Header {...this.props} />
        </>

    }
};

const mapStateToProps = (state: AppStatetype) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

// const mapDispatchToProps = ()=> ({})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
