// This is a utility file that includes the functions that can be imported by JSX

import axios from 'axios';

const baseURL = 'http://127.0.0.1:8080';

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

// this function send out the price update form to server and return response.
export async function priceUpdate(form) {
   const response = await axios.post(`${baseURL}/specialPrice`, form)
   return response;
}






