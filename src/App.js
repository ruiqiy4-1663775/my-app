import FileUpload, { FileUploadv2 } from './fileUpload';
import { Login } from './login';
import { priceUpdate, priceUpdateMolding, priceUpdateTier } from './utility';
import Res from './responsive';
import Flex from './Flex';

function App() {
  return (
    <div className="flex flex-col  h-screen  items-center bg-black text-white border border-white overflow-visible">
      <h1 className='text-4xl my-3'>Special Price Update Tool</h1>
      <div className=' w-full grow h-min-0 flex flex-col items-center space-y-10 border border-red-500 overflow-y-auto'>
        <Login />
        <FileUpload priceUpdate={priceUpdate} title={'Special price update Flooring'} indexArray={[1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]} />
        <FileUpload priceUpdate={priceUpdateMolding} title={'Special price update Molding'} indexArray={[1, 6, 7, 8, 9, 10]} />
        <FileUploadv2 priceUpdate={priceUpdateTier} title={'Special price tier matching'} />
        {/* <Flex></Flex> */}
        <div className='border border-yellow-300'>
          <div>I am at right</div>
          <div>fdasf</div>
          <div>fdasf</div>
          <div>fdasf</div>
          <div>fdasf</div>
          <div>fdasf</div>
          <div>fdasf</div>
          <div>fdasf</div>
          <div>fdasf</div>
          <div>fdasf</div>
          <div>fdasf</div>
          <div>fdasf</div>
          <div>fdasf</div>
        </div>
      </div>
    </div>
  );
}

export default App;
