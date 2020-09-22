import React, {FormEvent, useState} from 'react'

function UserInputForm(props: { onUsernameAdd: (username: string) => void }) {
    const [state, setState] = useState({username: 'poulad'})

    const onUsernameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setState({username: ev.target.value})
    }

    const onFormSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        props.onUsernameAdd(state.username)
        setState({username: ''})
    }

    return (
        <form onSubmit={onFormSubmit} onReset={() => {
            setState({username: ''})
        }}>
            <label htmlFor="username">GitHub User Profiles</label>
            <input id="username" placeholder="GitHub username" value={state.username} required
                   onChange={onUsernameChange}/>

            <button>Add</button>
            <button type="reset" disabled={state.username.length === 0}>Reset</button>
        </form>
    )
}

export default UserInputForm