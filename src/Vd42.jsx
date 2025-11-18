import React, { startTransition, useState, useTransition } from 'react'

const Vd42 = () => {
    // const [pending, setpending] = useState(false)
    // const handlebutton = async ()=>{
    //     setpending(true)

    //      await  new Promise(res=>setTimeout(res,2000))
    //      setpending(false)
    // }

    const [pending, startTransition] = useTransition()

    const handleButton = async () => {
        startTransition(async () => {
            await new Promise(res => setTimeout(res, 2000))
        })

    }
    return (
        <div>
            <h1>UseTransition</h1>
            {/* <button disabled={pending} onClick={handlebutton}>Click</button> */}
            <button disabled={pending} onClick={handleButton}> Click</button>
        </div>
    )
}

export default Vd42
