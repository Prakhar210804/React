import React, { use, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'


const UserList = () => {

    const [value, setValue] = useState([])
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate(   )



    useEffect(() => {
        setLoading(true)
      getUserData();
    }, [])
    
    const getUserData = async()=>{
        const url = "http://localhost:3000/users"
        let response = await fetch(url)
        response = await response.json()
        console.log(response)
        setValue(response)
        setLoading(false)
    }

    const deleteUser = async( id)=>{
        const url = "http://localhost:3000/users"
        let response = await fetch(url+"/" + id,{
            method:"delete"
        })
        response = await response.json();
        if(response){
            alert("record deleted")
            getUserData()
        }
        console.log(id)
    }

    const edituser= async(id)=>{
         navigate("/edit/" + id)
    }


    
  return (
    <div>
        <ul className='head'>
            <li>Name</li>
            <li>Age</li>
            <li>Email</li>
            <li>Action</li>
        </ul>
     
      {
        !loading ?
        value.map && value.map((item)=>(
            <ul className='list' key={item.id}>
                <li>{item.name}</li>
                <li>{item.age}</li>
                <li>{item.email}</li>
                <li><button onClick={()=>deleteUser(item.id)}>Delete</button>
                <button onClick={()=>edituser(item.id)}>edit</button>
                </li>
            </ul>
        ))
        : <h1>Data loading....</h1>
      }
    </div>
  )
}


export default UserList
