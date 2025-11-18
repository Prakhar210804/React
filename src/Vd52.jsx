import React, { createContext, useContext, useState } from 'react'

const Vd52 = () => {
  const [subject, setSubject] = useState('English')
  return (
    <div style={{ backgroundColor: "yellow", padding: "25px" }}>

      <SubjectContext.Provider value={subject}>

        <select defaultValue={subject} onChange={(event)=>{setSubject(event.target.value)}} >
          <option  >Select Subject</option>
          <option value="Math">Maths</option>
          <option value="History">History</option>
          <option value="Science">Science</option>
        </select>
        <br />
          
        <button onClick={()=>setSubject('')}>Clear</button>


        <h1>Context Api</h1>
        <College />

      </SubjectContext.Provider>




    </div>
  )
}

const College = () => {
  return (
    <div style={{ backgroundColor: 'red', padding: "25px" }}>
      <h1>College Component</h1>
      <ClassComponent />
    </div>
  )
}
const ClassComponent = () => {
  return (
    <div style={{ backgroundColor: 'skyblue', padding: "25px" }}>
      <h1>Class Component</h1>
      <Student />
    </div>
  )
}

const Student = () => {
  return (
    <div style={{ backgroundColor: 'green', padding: "25px" }}>
      <h1>Student Component</h1>
      <Subject />
    </div>
  )
}

const Subject = () => {

  const subject = useContext(SubjectContext)
  return (
    <div style={{ backgroundColor: 'pink', padding: "25px" }}>
      <h1>Subject is: {subject}</h1>
    </div>
  )
}





const SubjectContext = createContext("Math")

export default Vd52



