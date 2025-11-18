import React, { useEffect, useState } from 'react'


const Vd20 = () => {

  const [value, setValue] = useState("Prakhar Pandey")
  return (
    <div>
      <h1>Get Input field</h1>
      <input
       type="text" 
       onChange={(event)=> setValue(event.target.value)} 
       placeholder='Enter User Name' />
       <h1>{value}</h1>

       <button onClick={()=>setValue("")}>Clear val</button>
    </div>
  )
}

export default Vd20
