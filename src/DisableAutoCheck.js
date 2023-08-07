import axios from "axios"
import { useState } from "react";

function DisableAutoCheck() {
    const [message, setMessage] = useState(null);
    async function handleClick() {
        try {
            setMessage('unchecking auto box')
            await axios.get('http://127.0.0.1:8080/uncheckauto')
            setMessage('uncheck success')
        } catch (err) {
            setMessage('an error occured')
            console.log(err)
        }
        
    }

    return (
        <div className='w-full md:w-4/12 border p-2 space-y-1.5'>
            <button onClick={handleClick}> Uncheck Auto</button>
            {message && <div className="w-full">
                {message}
            </div>}
        </div>
    )

}
export default DisableAutoCheck