import FileUpload from './fileUpload';
import { Login } from './login';
import {priceUpdate, priceUpdateMolding} from './utility';

function App() {
  return (
    <div className="bg-gray-800 text-white p-8 min-h-screen">
      <Login/>
      <FileUpload priceUpdate={priceUpdate} title={'Special price update'}/>
      <FileUpload priceUpdate={priceUpdateMolding} title={'Special price update Molding'}/>
    </div>
  );
}

export default App;
