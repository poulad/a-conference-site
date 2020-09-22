import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInputForm from "./UserInputForm";
import ProfilesList from "./ProfilesList";
import {Profile} from "./models/profile";

function incrementCounter(counter: number): number {
    return counter + 1;
}

function App() {
    const profiles: Profile[] = [
        {name: "Poulad", avatar_url: "", company: ""},
        {name: "Foo", avatar_url: "", company: ""},
        {name: "Bar", avatar_url: "", company: ""},
    ]

    return (
        <div className="App">
            <header className="App-header">
                <UserInputForm/>
                <ProfilesList profiles={profiles}/>
            </header>
        </div>
    );

    // return (
    //     <div className="App">
    //         <header className="App-header">
    //             <img src={logo} className="App-logo" alt="logo"/>
    //             <p>
    //                 oof
    //             </p>
    //             <a
    //                 className="App-link"
    //                 href="https://reactjs.org"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //             >
    //                 Learn React
    //             </a>
    //             <p>
    //                 <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    //             </p>
    //         </header>
    //     </div>
    // );
}

export default App;
