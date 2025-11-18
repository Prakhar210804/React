import React, { useState } from 'react'

const Vd53 = () => {
    const [value, toggleValue] = useToggle(true)
  return (
    <div>
      <h1>Custom Hook</h1>
      <button onClick={toggleValue}>Toggle Heading </button>
      <button onClick={()=>toggleValue(false)}>Hide Heading</button>
      <button onClick={()=>toggleValue(true)}>Show Heading</button>

      {
        value? <h2>Custom hook in react js</h2>:null
      }
    </div>
  )
}

const useToggle =(defaultVal)=>{
    const[value,setValue] = useState(defaultVal)

    function toggleValue(val){
        if(typeof val != 'boolean'){
            setValue(!value)
        } else {
            setValue(val)
        }
    }
    return[value,toggleValue]
}

export default Vd53
