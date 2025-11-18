import React from 'react'
import { Link } from 'react-router'

const User = () => {
    const userData = [
        {
            id: 1,
            name: "Anil"
        },
        {
            id: 2,
            name: "Sam"
        },
        {
            id: 3,
            name: "Sidddhu"
        },
        {
            id: 4,
            name: "Peter"
        },
        {
            id: 21,
            name: "prakhar"
        },
    ]
    return (
        <div style={{ marginLeft: "20px" }}>
            <h1>User List Page</h1>
            {
                userData.map((item) => (
                    <div >
                        <h4 ><Link to={"/users/" + item.id}>{item.name}</Link></h4>
                    </div>
                ))
            }
        </div>
    )
}

export default User
