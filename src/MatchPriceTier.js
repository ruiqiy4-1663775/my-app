import axios from "axios"
import { useState } from "react";
import { BACKEND_URL } from "./constants";

function MatchPriceTier({username}) {
    const [message, setMessage] = useState(null);
    async function handleClick() {
        try {
            setMessage('match price tier')
            await axios.get(BACKEND_URL + '/priceTierbutton')
            // await axios.get('http://127.0.0.1:8080/priceTierbutton')
            setMessage('success')
            console.log(`\n\n at ${Date()} ${username} clicked match price tier button`)
        } catch (err) {
            setMessage('an error occured')
            console.log(err)
        }
        
    }

    return (
        <div className='w-full md:w-4/12 border p-2 space-y-1.5'>
            <button className='bg-cyan-500 hover:bg-cyan-600 rounded-full px-8 text-base' onClick={handleClick}> Match Price Tier</button>
            {message && <div className="w-full">
                {message}
            </div>}
        </div>
    )
}

export default MatchPriceTier;