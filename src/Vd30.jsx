import React, { useEffect, useState } from 'react'

const Vd30 = () => {

   const [value, setValue] = useState(0)
     function callonce(){
      
        console.log("calll once function");
        
     }

    useEffect(() => {
       callonce();
    }, [])
   
  return (
    <div>
      <h1>UseEffect hook</h1>
      <button onClick={()=>setValue(value+1)}>Counter</button>
      <h4>{value}</h4>
    </div>
  )
}

// Use effect tips

//1.  UseEffect = ()=>{
// // call every time 
// }) 


//2.   UseEffect = ()=>{
// // call only one 
// },[])



//3.  UseEffect = ()=>{
// // call on changing single state 
// },[state1]) 


//4.  UseEffect = ()=>{
// // call on changing both state 
// },[state1,state]) 


//5.  UseEffect = ()=>{
// // call on changing props 
// },[prop1,prop2]) 






export default Vd30
