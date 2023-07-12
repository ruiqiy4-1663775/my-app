import React, { useState } from 'react';
import axios from 'axios';

const FileUploadButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileChangeHandler = event => {
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    const formData = new FormData();

    // Update the formData object 
    formData.append('file', selectedFile);

    // Request made to the backend api 
    // Send formData object 
    axios.post('http://localhost:8080/upload', formData)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <input type="file" onChange={fileChangeHandler} />
      <button onClick={fileUploadHandler}>Upload</button>
    </div>
  );
};

export default FileUploadButton;