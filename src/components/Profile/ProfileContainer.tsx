import Profile from "./Profile";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStatetype} from "../../redux/redux-store";
import {ProfilePageType} from "../../redux/store";


export type ProfilePropsType = {
    // dispatch:DispatchType
    // profilePage: ProfilePageType
    // setUserProfile: (val: any) => void
}

type MapStateToPropsType = {
    // profile: ProfilePageType
}

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state:AppStatetype)=> ({
    profile:state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);
