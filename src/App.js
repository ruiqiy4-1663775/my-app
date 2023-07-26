import FileUploadButton from './fileUpload';
import './App.css';
import { Login } from './login';

function App() {
  return (
    <div className="bg-gray-800 text-white p-8 min-h-screen">
      <Login/>
      <FileUploadButton/>
    </div>
  );
}

export default App;
