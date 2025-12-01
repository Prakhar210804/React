import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const UserEdit = () => {

    const {id} = useParams();
       const [name, setName] = useState('')
         const [age, setAge] = useState('')
         const [email, setEmail] = useState('')
     const url = "http://localhost:3000/users/"+id;
     const navigate = useNavigate();
 
     useEffect(()=>{
       getUserData()
     },[])

  
     const getUserData = async()=>{
          
           let response = await fetch(url)
           response  =await response.json()

           console.log(response);
           setName(response.name)
           setAge(response.age)
           setEmail(response.email)
     }


     const updateUserData= async()=>{
        console.log(name,age,email);
        let response = await fetch(url,{
          method:"Put",
          body:JSON.stringify({name,age,email})
        })
        response = await response.json()
        
        if(response){
            alert("user data updated")
            navigate('/')
        }
     }



  return (
    <div style={{textAlign:"center"}}>
      <h1>User Edit Page</h1>
      <input onChange={(event)=>setName(event.target.value)} type="text" name="" id=""  value={name} placeholder='user name' />
      <br /> 
      <input onChange={(event)=>setAge(event.target.value)} type="text" name="" id="" value={age} placeholder='user age' />
      <br />
      <input onChange={(event)=>setEmail(event.target.value)} type="text" name="" id="" value={email} placeholder='user email' />
      <br />
      <button onClick={updateUserData}>Update User</button>
    </div>
  )
}

export default UserEdit
