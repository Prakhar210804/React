import React from 'react'
import { Link, useParams } from 'react-router'

const UserDetaials = () => {

    const param = useParams()
  return (
    <div>
      <h1>User Detail Page </h1>
      <h2>User id is :{param.id}</h2>

      <h3><Link to ="/users">Back</Link></h3>
    </div>
  )
}

export default UserDetaials
