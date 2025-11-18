import React from 'react'

const Ex1 = () => {

    const callfunc=()=>{
        alert("function called")
    }
  return (
    <div>
        <h1>Prakhar Pandey</h1>
       <h3>Traffic light regulations</h3>
       
       <ul>
        <li>Invent a new traffic light</li>
        <li>Reharse a movie scene</li>
        <li>Improve the spectrum technology</li>
       </ul>

       <button onClick={callfunc}>Click me</button>
    </div>
  )
}

export default Ex1
