import React, { useState } from 'react'


const Vd18 = () => {
    const [value, setValue] = useState(0)
  return (
    <div>
        <h1>Multiple condition in react {value}</h1>
        <button onClick={()=>setValue(value+1)}>Counter</button>
        {
            value==0 ?<h1>Condition 0</h1> 
            : value==1?<h1>COnditon 1</h1>
            : value==2?<h1>COnditon 2</h1>
            : value==3?<h1>COnditon 3</h1>
            : value > 3 ? setValue(0): null


        }
    </div> 
  )
}

export default Vd18
