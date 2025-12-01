import React, { useEffect, useState } from 'react'
import "./App.css"
const Get2 = () => {

    const [value, setValue] = useState([])
    const [loading,setLoading] = useState(false)



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
    
  return (
    <div>
      <h1>Integrate json server with get method</h1>
      {
        !loading ?
        value.map && value.map((item)=>(
            <ul className='list' key={item.id}>
                <li>{item.name}</li>
                <li>{item.age}</li>
                <li>{item.email}</li>
            </ul>
        ))
        : <h1>Data loading....</h1>
      }
    </div>
  )
}

export default Get2
