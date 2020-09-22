import React from "react";
import {Profile} from "./models/profile";

const ProfileCard = (props: { profile: Profile }) => {
    return (
        <div className='profile'>
            <img src={props.profile.avatar_url} alt="user avatar" width="75px"/>
            <h3><a target="_blank" href={`https://github.com/${props.profile.login}`}>{props.profile.name}</a></h3>
            <h6>{props.profile.location}</h6>
        </div>
    )
}

export default ProfileCard