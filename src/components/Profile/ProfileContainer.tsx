import Profile from "./Profile";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {AppStatetype} from "../../redux/redux-store";
import {withRouter, RouteComponentProps} from "react-router";


type MapStateToPropsType = {
    profile:  UserProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType)=> void
}

type PathParamsType = {
    userId?: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
    let userId = this.props.match.params.userId
        if(!userId) {
            userId = '2'
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {

                        this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
                {/*<Profile {...this.props}/>*/}
            </div>
        );
    }

};

let mapStateToProps = (state:AppStatetype):MapStateToPropsType=> ({
    profile: state.profilePage.profile
}) as MapStateToPropsType


 let WithUrlDataContainerComponent =  withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);
