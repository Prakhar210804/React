import React from 'react'

const Vd39 = () => {
    const handleform=(event)=>{
         event.preventDefault();
         const user = document.querySelector('#user').value;
         const pass = document.querySelector('#pass').value;

         console.log(user,pass)
    }
  return (
    <div>
       <h1>Uncontrolled Component</h1>
       <form action="" method="post" onSubmit={handleform}>
        <input type="text" id='user' placeholder='Enter user name' />
        <br />
        <input type="passsword" id='pass' placeholder='Enter user password' />
        <br />
        <button>submit</button>
       </form>
    </div>
  )
}

export default Vd39
