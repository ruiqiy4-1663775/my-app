import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    axios.post('/api/login', { username, password })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage('Login failed');
      });
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in</h2>
        </div>
        <div>
          <input 
            type="text" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            className="w-full p-2 m-2 border rounded" 
            placeholder="Username" 
          />
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            className="w-full p-2 m-2 border rounded" 
            placeholder="Password" 
          />
          <button 
            onClick={handleLogin} 
            className="w-full p-2 m-2 bg-blue-600 text-white rounded"
          >
            Login
          </button>
          <div className="text-red-600">{message}</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
