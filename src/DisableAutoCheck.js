import axios from "axios"
import { useState } from "react";

function DisableAutoCheck({username}) {
    const [message, setMessage] = useState(null);
    async function handleClick() {
        try {
            console.log(`\n\n at ${Date()} ${username} started unchecking auto`)
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
            <button className='bg-cyan-500 hover:bg-cyan-600 rounded-full px-8 text-base' onClick={handleClick}> Uncheck Auto</button>
            {message && <div className="w-full">
                {message}
            </div>}
        </div>
    )

}
export default DisableAutoCheck