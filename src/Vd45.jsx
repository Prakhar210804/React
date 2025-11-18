import React, { useState } from 'react'

const Vd45 = () => {
    const [user, setUser] = useState('')
    return (
        <div>
            <AddUser setUser={setUser} />
            <DisplayUser user = {user} />

        </div>
    )
}



function DisplayUser({ user }) {
    return (
        <div>
            <h3>{user}</h3>
        </div>
    )
}

function AddUser({ setUser }) {
    return(
        <div>
            <h1>Add User</h1>
            <input type="text"  placeholder='Enter User name' onChange={(event)=>{setUser(event.target.value)}}/>
        </div>
    )
}

export default Vd45
