import React from 'react'
import { useFormStatus } from 'react-dom';

const Vd41 = () => {
    const handleSubmit = async () => {
        await new Promise(res => setTimeout(res, 2000));
        console.log("submit")
    }

    function CustomerForm() {
        const {pending} = useFormStatus()
        return (
            <div>
                <input type="text" placeholder='Enter user name' />
                <br />
                <input type="password" placeholder='Enter user password' />
                <br />
                <button disabled={pending}>{pending?"Submitting" : "Submit"}</button>
            </div>
        )
    }
    return (
        <div>
            <h1>Form Status hook</h1>
            <form action={handleSubmit}>
                <CustomerForm/>
            </form>
        </div>
    )
}

export default Vd41
