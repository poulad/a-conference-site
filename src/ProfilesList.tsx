import React from "react";
import {Profile} from "./models/profile";
import ProfileCard from "./ProfileCard";


function ProfilesList(props: { profiles: Profile[] }) {
    return (
        <div>
            {props.profiles.map(p => <ProfileCard profile={p}/>)}
        </div>
    )
}

export default ProfilesList