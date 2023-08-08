import axios from "axios"
import { useState } from "react";

function MatchPriceTier() {
    const [message, setMessage] = useState(null);
    async function handleClick() {
        try {
            setMessage('match price tier')
            await axios.get('http://127.0.0.1:8080/priceTierbutton')
            setMessage('success')
        } catch (err) {
            setMessage('an error occured')
            console.log(err)
        }
        
    }

    return (
        <div className='w-full md:w-4/12 border p-2 space-y-1.5'>
            <button onClick={handleClick}> Match Price Tier</button>
            {message && <div className="w-full">
                {message}
            </div>}
        </div>
    )
}

export default MatchPriceTier;