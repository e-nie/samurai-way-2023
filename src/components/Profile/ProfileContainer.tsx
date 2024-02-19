import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {AppStatetype} from "../../redux/redux-store";
import {withRouter, RouteComponentProps} from "react-router";



type MapStateToPropsType = {
    profile: UserProfileType
}

type MapDispatchToPropsType = {
    // setUserProfile: (profile: UserProfileType) => void
    getUserProfile: (userId: number) => void
}

type PathParamsType = {
    userId?: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
    // debugger
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 30293
        }
       this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
                {/*<Profile {...this.props}/>*/}
            </div>
        );
    }

};

let mapStateToProps = (state: AppStatetype): MapStateToPropsType => ({
    profile: state.profilePage.profile
}) as MapStateToPropsType


let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
