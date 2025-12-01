import React, { useState } from 'react'

const UserAdd = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')


  const createUser =async()=>{
    console.log(name,age,email)

    const url = "http://localhost:3000/users"

    let response = await fetch(url,{
        method:"Post",
        body:JSON.stringify({name,email,age})
    })

      response = await response.json()

      if(response){
        alert("new user added")
      }
  }



  return (
    <div style={{textAlign:"center"}}>
       <h1>Add new </h1>
       <input type="text" placeholder='enter name'
        onChange={(event)=>setName(event.target.value)} />
       <br />
       <input type="text" placeholder='enter age' 
       onChange={(event)=>setAge(event.target.value)}/>
       <br />
       <input type="text" placeholder='enter email'
       onChange={(event)=>setEmail(event.target.value)} />
       <br />
       <button onClick={createUser}>Add user</button>
    </div>
  )
}

export default UserAdd
