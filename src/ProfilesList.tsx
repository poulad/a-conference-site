import React from "react";
import {Profile} from "./models/profile";


function ProfilesList(props: { profiles: Profile[] }) {
    return (
        <div>
            {props.profiles.map(p => <h6>{p.name}</h6>)}
        </div>
    )
}

export default ProfilesList