import React, { useState } from 'react'

const Vd16 = () => {

    const [value, setValue] = useState("Apple")
    const handlefruit =()=>{
        setValue("Bannna")
    }
  return (
    <div>
        <h1>{value}</h1>
       <button onClick={handlefruit}>click me</button>
    </div>
  )
}

export default Vd16
