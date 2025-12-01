import { useEffect, useState } from "react"
import React from 'react'

const Get = () => {

    const [value, setValue] = useState([])

    useEffect(() => {
        getUsersData();
    }, [])

    async function getUsersData() {
    
        const url = "https://catfact.ninja/fact"
        
        let response = await fetch(url)
        response = await response.json()
        console.log(response);
        setValue(...value,response)
    }


    return (
        <div>
            <h1>Api calling get method</h1>
             
           
           {
            value &&(
                <ul>
                    <li>{value.fact}</li>
                    <li>{value.length }</li>
                </ul>
            )
           }

        </div>
    )


}

export default Get
