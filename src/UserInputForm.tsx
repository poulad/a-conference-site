import React, {FormEvent} from 'react'

export function onFormSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
}

function UserInputForm(props: any) {
    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="username">GitHub User Profiles</label>
            <input id="username" placeholder="GitHub username" value="poulad"/>
            <button>Add</button>
        </form>
    )
}

export default UserInputForm