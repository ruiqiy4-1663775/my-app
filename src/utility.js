// This is a utility file that creates button interface for all functionalities.

import axios from 'axios';
const url = 'http://127.0.0.1:8080/proxy';
const loginData = {
  baseURL : "https://lionsfloormobile.vision33.com/sl/b1s/v1/Login",
  PostData: {
  UserName: "ryu",
  Password: "1234",
  CompanyDB: "LIONSFLOOR"
  }
};

async function loginToServiceLayer() {
  try {
    console.log("loging in...")
    const response = await axios.post(url,loginData);

    if (response.status === 200) {
      console.log("sucessfully get the response...\n\n")
      console.log("here is response:\n\n\n\n\n")
      console.log(response)
      const sessionId = response.data.SessionId;
      console.log('Login successful! \nSession ID:', sessionId);
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
  function clickHandler() {
    const sessionId = loginToServiceLayer();
  }
  return (<button onClick ={clickHandler}>Connect to service layer</button>)
}

export function LoginSuccess(message) {
  return (
    <div className="success-window">
      <h2>Login Successful</h2>
      <p>{message}</p>
    </div>
  );

}

