import FileUpload, { FileUploadv2 } from './fileUpload';
import { Login } from './login';
import { priceUpdate, priceUpdateMolding, priceUpdateTier } from './utility';

function App() {
  return (
    <div className="h-full flex flex-col items-center bg-black text-white overflow-visible">
      <h1 className='text-4xl my-3'>Special Price Update Tool</h1>
      <div id='scroll' className=' w-full grow h-min-0 flex flex-col items-center space-y-10 overflow-y-auto'>
        <Login />
        <FileUpload priceUpdate={priceUpdate} title={'Special price update Flooring'} indexArray={[1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]} />
        <FileUpload priceUpdate={priceUpdateMolding} title={'Special price update Molding'} indexArray={[1, 6, 7, 8, 9, 10]} />
        <FileUploadv2 priceUpdate={priceUpdateTier} title={'Special price tier matching'} />
      </div>
    </div>
  );
}

export default App;
