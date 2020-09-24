import React from 'react';
import './App.css';
import GameBoard from "./components/GameBoard";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <GameBoard/>
            </header>
        </div>
    );
}

/*
import React, {useState} from 'react';
import UserInputForm from "./UserInputForm";
import ProfilesList from "./components/ProfilesList";
import {Profile} from "./models/profile";

async function getUserProfile(username: string): Promise<Profile> {
    const resp = await fetch(`https://api.github.com/users/${username}`)
    const respData = await resp.json()
    return respData as Profile;
}

function App1() {
    const [state, setState] = useState({
        profiles: new Array<Profile>()
    })

    const onUsernameAdd = async (username: string) => {
        const profiles = state.profiles
        if (profiles.every(p => p?.login?.toLocaleLowerCase() !== username.toLocaleLowerCase())) {
            const newProfile = await getUserProfile(username)
            setState({profiles: [...profiles, newProfile]})
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <UserInputForm onUsernameAdd={onUsernameAdd}/>
                <hr style={{width: "20rem"}}/>
                <ProfilesList profiles={state.profiles}/>
            </header>
        </div>
    );
}
*/

export default App;
