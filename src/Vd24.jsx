import React, { useState } from 'react'

const Vd24 = () => {
    const [value, setValue] = useState("female")
    const [city , setCity] = useState("Delhi")
    return (
        <div>
            <h1>Handle Raddio and Dropdown</h1>
            <h3>Select Gender : </h3>

            <input type="radio" onChange={(event) => setValue(event.target.value)} name="gender" id="male" checked={value == 'male'} value="male" />
            <label htmlFor="male">Male</label>

            <input onChange={(event) => setValue(event.target.value)} type="radio" name='gender' id='female' checked={value == 'female'} value="female" />
            <label htmlFor="female">Female</label>

            <h2>Select Gender : {value}</h2>

            <br />
            <br />
            <br />

            <h2>Select City : {city}</h2>
             
                 <select defaultValue={'delhi'} name="" id="" onChange={(event)=>{setCity(event.target.value)}}>
                    <option value="default">default</option>
                    <option value="noida">Noida</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                 </select>
        </div>


    )
}

export default Vd24
