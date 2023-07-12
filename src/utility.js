// This is a utility file that creates button interface for all functionalities.

import axios from 'axios';

const baseURL = 'https://lionsfloormobile.vision33.com/b1s/v1/Login';
const loginData = {
  UserName: "ryu",
  Password: "1234",
  CompanyDB: "LIONSFLOOR"
};

async function loginToServiceLayer() {
  try {
    console.log("loging in...")
    const response = await axios.post(baseURL, loginData);

    if (response.status === 200) {
      const sessionId = response.data.SessionId;
      console.log('Login successful! Session ID:', sessionId);
      return sessionId;
    } else {
      throw new Error('Login failed.');
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error('An error occurred while logging in to SAP Business One Service Layer.');
  }
}

export function TesterButton() {
    
    return (<button onClick ={()=>loginToServiceLayer()}>Hello world</button>)
}

