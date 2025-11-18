import React, { useRef } from 'react'

const VD38 = () => {
    const inputref = useRef(null)
    const inputhandler =()=>{
        console.log(inputref);
        inputref.current.focus();
        inputref.current.style.color = 'red';
        inputref.current.placeholder = "enter password"
        
    }
    const togglehandle=()=>{
        
        if(inputref.current.style.display != 'none'){
            inputref.current.style.display = 'none'
        } 
        else {
            inputref.current.style.display = 'inline'
        }
    }
    const first = useRef(25)
    
  return (

    <div>
      <h1>useRef</h1>
      <button onClick={togglehandle}>Toggle</button>


      <input ref={inputref} type="text" placeholder='Enter name ' />
      <button  onClick={inputhandler}>Focus on field</button>

      <br />
      
      <h3 ref={first}>{first.current}</h3>
    </div>
  )
}

export default VD38
