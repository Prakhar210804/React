import React from 'react'

const Vd40 = () => {

    const displayName=()=>{
        alert("display name function")
    }
  return (
    <div>
       <h1>Call parent function</h1>
       <User displayName={displayName}/>
    </div>
  )
}

const User = ({displayName})=>{
    return(
        <div>
            <button  onClick={displayName}>Display Name </button>

        </div>
    )
}

export default Vd40
