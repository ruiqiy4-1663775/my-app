import { useState } from "react";
import axios from 'axios'
import { BACKEND_URL } from "./constants";

export default function UpdateCommisionTable() {
    const [message, setMessage] = useState(null);

    async function handleClick() {
        try {
            let response = await axios.post(BACKEND_URL + '/update_commission_table')
            console.log('Response from update commision table', response)
            setMessage(response.data)
        } catch (err) {
            setMessage('an error occured')
            console.log(err)
        }
    }

    return (
        <div className='w-full md:w-4/12 border p-2 space-y-1.5'>
            <button className='bg-cyan-500 hover:bg-cyan-600 rounded-full px-8 text-base' onClick={handleClick}> Update Commission Table </button>
            {message &&
                <div className="w-full">
                    {message}
                </div>
            }
        </div>
    )
}