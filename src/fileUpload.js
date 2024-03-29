import { useState } from 'react';
import Modal from './popup';
import { handleFileUpload } from './utility';

function FileUpload({ priceUpdate, title, indexArray, username }) {
    const [items, setItems] = useState();
    const [message, setMessage] = useState(null);

    async function handleClick() {
        try {
            setMessage("Updating, Please wait...")
            let response = await priceUpdate(items, username)
            setMessage(response.data);
            console.log(response);
            console.log(`\n\n ${username} change the price at ${Date()}`)
        } catch (error) {
            console.log(error);
            setMessage("Update is not successful. You may restart the program and try again")
        }
    }

    return (
        <div className='w-full md:w-4/12 border p-2 space-y-1.5'>
            <h1>{title}</h1>
            <input
                type="file"
                accept=".xlsx,.xls"
                id="file_input"
                onChange={(e) => { handleFileUpload(e, indexArray, setItems) }}
                className="block text-sm rounded-lg text-gray-400 cursor-pointer"
                aria-describedby="file_input_help"
            />
            <p className="mt-1 text-sm text-gray-500" id="file_input_help">upload the excel sheet here </p>
            {items && <pre>
                {JSON.stringify(items, null, 2)}
            </pre>}
            <button className='bg-cyan-500 hover:bg-cyan-600 rounded-full px-8 text-base' onClick={handleClick}>Update</button>
            {message && <Modal closeModal={() => { setMessage(null) }}>
                {message}
            </Modal>}
        </div>
    );
}

// export function FileUploadv2({ priceUpdate, title, username }) {
//     const [items, setItems] = useState();
//     const [message, setMessage] = useState(null);

//     async function handleClick() {
//         try {
//             setMessage("Updating, Please wait...")
//             let response = await priceUpdate(items)
//             setMessage(response);
//             console.log(response);
//         } catch (error) {
//             console.log(error);
//             setMessage("Update is not successful. You may restart the program and try again")
//         }
//     }

//     return (
//         <div className='w-full md:w-4/12 overflow-y-auto space-y-1.5 border p-2'>
//             <h1>{title}</h1>
//             <input
//                 type="file"
//                 accept=".xlsx,.xls"
//                 id="file_input"
//                 onChange={(e) => { handleFileUploadv2(e, setItems) }}
//                 className="block text-sm rounded-lg text-gray-400 cursor-pointer"
//                 aria-describedby="file_input_help"
//             />
//             <p className="mt-1 text-sm text-gray-500" id="file_input_help">upload the excel sheet here </p>
//             <button className='bg-cyan-500 hover:bg-cyan-600 rounded-full px-8 text-base' onClick={handleClick}>Update</button>
//             {items && <pre>
//                 {JSON.stringify(items, null, 2)}
//             </pre>}
//             {message && <Modal closeModal={() => { setMessage(null) }}>
//                 {message}
//             </Modal>}
//         </div>
//     );
// }

export default FileUpload;