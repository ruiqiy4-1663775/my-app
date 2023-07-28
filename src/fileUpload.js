import { useState } from 'react';
// import {priceUpdate} from './utility';
import Modal from './popup';
import { handleFileUpload } from './utility';

function FileUpload({priceUpdate, title, indexArray}) {
    const [items, setItems] = useState();
    const [message, setMessage] = useState(null);

    async function handleClick() {
      try {
        setMessage("Updating, Please wait...")
        let response = await priceUpdate(items)
        setMessage(response.data);
        console.log(response);
      } catch(error) {
        console.log(error);
        setMessage("Update is not successful. You may restart the program and try again")
      }
    }

    return (
        <div className='w-3/12 border p-2 space-y-1.5'>
          <h1>{title}</h1>
          <input
              type="file"
              accept=".xlsx,.xls"
              id="file_input"
              onChange={(e) => {handleFileUpload(e, indexArray, setItems)}}
              className="block text-sm rounded-lg text-gray-400 cursor-pointer"
              aria-describedby="file_input_help"
          />
          <p className="mt-1 text-sm text-gray-500" id="file_input_help">upload the excel sheet here </p>
          {items && <pre>
              {JSON.stringify(items, null, 2)}
          </pre>}
          <button onClick={handleClick}>Update</button>
          {message && <Modal closeModal={() => {setMessage(null)}}>
            {message}
          </Modal>}
        </div>
    );
}

export default FileUpload;