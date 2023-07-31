import FileUpload from './fileUpload';
import { Login } from './login';
import {priceUpdate, priceUpdateMolding} from './utility';
import Form from './form';

function App() {
  return (
    <div className="bg-gray-800 text-white p-8 min-h-screen">
      <Login/>
      <FileUpload priceUpdate={priceUpdate} title={'Special price update'} indexArray={[1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]}/>
      <FileUpload priceUpdate={priceUpdateMolding} title={'Special price update Molding'} indexArray={[1, 6, 7, 8, 9, 10]}/>
      <Form/>
    </div>
  );
}

export default App;
