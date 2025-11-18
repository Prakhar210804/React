import React, { useState } from 'react'

const Vd17 = () => {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <h1>Toggle in react</h1>
        {
            display ? <h1>Anil Siddhu</h1> : null
        }      

        <button onClick={()=>setDisplay(!display)}>Toggle</button>
      
    </div>
  )
}

export default Vd17
