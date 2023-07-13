import logo from './logo.svg';
import FileUploadButton from './fileUpload';
import './App.css';
import { TesterButton } from './utility';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FileUploadButton/>
        <TesterButton/>
      </header>
    </div>
  );
}

export default App;
