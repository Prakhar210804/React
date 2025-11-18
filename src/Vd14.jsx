import React from 'react'

const a =()=>{
    alert("sum")
}

const Vd14 = () => {
     function call(){
            alert("called")
         }
  return (
    <div>
        <button onClick={call}>click me</button>
    </div>
  )
}

export default Vd14
