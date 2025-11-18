import React, { useState } from 'react'

const Vd23 = () => {
  return (
    <div>
      <h1>Handle Checkbox in React</h1>
      <Checkbox/>
    </div>
  )
}

const Checkbox=()=>{

    const [skills, setValue] = useState([])
    const handleValues = (event)=>{
          console.log(event.target.value, event.target.checked);
          if(event.target.checked){
            setValue([...skills, event.target.value])
          } else {
            setValue([...skills.filter((item)=>item!=event.target.value)])
          }
          
    }
    return(
        <div>
            <h3>Select Your Skills</h3>

            <input onChange={handleValues} type="checkbox" id='php' value= 'php'/>
            <label htmlFor="php">PHP</label>
             <br />
             <br />
            <input onChange={handleValues} type="checkbox" id='js' value='js' />
            <label htmlFor="js">JS</label>
             <br />
             <br />
            <input onChange={handleValues} type="checkbox" id='node' value='node' />
            <label htmlFor="node">Node.js</label>
            <br />
            <br />
            <input onChange={handleValues} type="checkbox" id='java' value='java' />
            <label htmlFor="Java">Java</label>
          
          <h1>{skills.toString()}</h1>
        </div>
    )
}

export default Vd23
