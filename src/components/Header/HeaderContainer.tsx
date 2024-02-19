import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, InitialStateType, setAuthUserData, setAuthUserDataType} from "../../redux/auth-reducer";
import {AppStatetype} from "../../redux/redux-store";


type MapStateToPropsType = {
    isAuth: boolean
    login: string | null

}

type MapDispatchToPropsType = {
    // setAuthUserData: (id: string, email: string, login: string) => void
    getAuthUserData: () => void
}

export type PropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
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
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);

