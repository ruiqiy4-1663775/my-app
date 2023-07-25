import { useState } from 'react';
import * as XLSX from 'xlsx';
import {priceUpdate} from './utility';

function ExcelReader() {
    const [items, setItems] = useState({});

    const handleFileUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
            // Parse data
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            // Get first worksheet
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            // Convert array of arrays
            const data = XLSX.utils.sheet_to_json(ws, {header: 1});
            // Create an object from the data
            const object = data.reduce((obj, row) => {
              if (row.length === 2) {
                  obj[row[0]] = row[1];
              } else {
                  console.log('Ignoring row with less than 2 elements:', row);
              }
              return obj;
            }, {});
            // Update state
            setItems(object);
        };
        reader.readAsBinaryString(file);
      } else {
        setItems({});
      }
    }

    async function handleClick() {
      let response = await priceUpdate(items)
      console.log(response);
    }

    return (
        <div className='w-3/12 border p-2 space-y-1.5'>
          <h1>Special price update</h1>
          <input
              type="file"
              accept=".xlsx,.xls"
              id="file_input"
              onChange={handleFileUpload}
              className="block text-sm rounded-lg text-gray-400 cursor-pointer"
              aria-describedby="file_input_help"
          />
          <p className="mt-1 text-sm text-gray-500" id="file_input_help">upload the excel sheet here </p>
          <pre>
              {JSON.stringify(items, null, 2)}
          </pre>
          <button onClick={handleClick}>Update</button>
        </div>
    );
}

export default ExcelReader;