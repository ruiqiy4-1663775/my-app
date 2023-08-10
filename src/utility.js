// This is a utility file that includes the functions that can be imported by JSX

import axios from 'axios';
import * as XLSX from 'xlsx';

const baseURL = 'http://127.0.0.1:8080';
// const baseURL = '';

export async function loginToServiceLayer() {
  try {
    const response = await axios.get(`${baseURL}/login`);
    console.log("login complete: ", response)
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An error occurred while logging in to SAP Business One Service Layer. You should restart the server');
  }
}

// this function send out the price update form to server and return response
export async function priceUpdate(form, username) {
  let data = { info: form, username: username }
  const response = await axios.post(`${baseURL}/specialPrice`, data)
  return response;
}

export async function priceUpdateMolding(form, username) {
  let data = { info: form, username: username }
  const response = await axios.post(`${baseURL}/specialPriceMolding`, data)
  return response;
}

export async function priceUpdateTier(array) {
  let chunkSize = 10;
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    // console.log(chunk);
    await axios.post(`${baseURL}/priceTier`, chunk)
  }
}

// This function parse the rows of excel into maps.
export function handleFileUpload(e, indexArray, setItems) {
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
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      // Create an object from the data
      const object = data.reduce((obj, row, index) => {
        if (indexArray.includes(index)) {
          obj[row[0]] = row[1];
        }
        return obj;
      }, {});
      // Update state
      setItems(object);
    };
    reader.readAsBinaryString(file);
    // Reset the file input after handling
    e.target.value = '';
  }
}

export const handleFileUploadv2 = (event, setItems) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (evt) => {
    // Parse data
    const bstr = evt.target.result;
    const workbook = XLSX.read(bstr, { type: 'binary' });
    // Get first worksheet
    const wsname = workbook.SheetNames[0];
    const ws = workbook.Sheets[wsname];
    // Convert array of arrays
    const data = XLSX.utils.sheet_to_json(ws, { header: 0 });
    // Update state
    setItems(data);
  };
  reader.readAsBinaryString(file);
};






