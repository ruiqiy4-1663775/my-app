// This is a utility file that includes the functions that can be imported by JSX

import axios from 'axios';

const baseURL = 'http://127.0.0.1:8080'
const url = 'http://127.0.0.1:8080/proxy';
const loginData = {
  baseURL : "https://lionsfloormobile.vision33.com/sl/b1s/v1/Login",
  PostData: {
  UserName: "ryu",
  Password: "1234",
  CompanyDB: "LIONSFLOOR"
  }
};

export async function loginToServiceLayer() {
  try {
    console.log("loging in...")
    const response = await axios.get(`${baseURL}/login`);
    console.log("sucessfully get the response...\n\n")
    console.log("here is response:\n\n\n\n\n")
    console.log(response)
      // const sessionId = response.data.SessionId;
      // console.log('Login successful! \nSession ID:', sessionId);
      // return sessionId;
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An error occurred while logging in to SAP Business One Service Layer.');
  }
}

// This functiuon login to the service layer and return the session id
// export async function loginToServiceLayer() {
//   try {
//     console.log("loging in...")
//     const response = await axios.post(url,loginData);

//     if (response.status === 200) {
//       console.log("sucessfully get the response...\n\n")
//       console.log("here is response:\n\n\n\n\n")
//       console.log(response)
//       const sessionId = response.data.SessionId;
//       console.log('Login successful! \nSession ID:', sessionId);
//       return sessionId;
//     } else {
//       throw new Error('Login failed.');
//     }
//   } catch (error) {
//     console.error('Error:', error.message);
//     throw new Error('An error occurred while logging in to SAP Business One Service Layer.');
//   }
// }

// this function send out the price update form to server and return response.
export async function priceUpdate(form) {
   const response = await axios.post(`${baseURL}/specialPrice`, form)
   return response;
}






