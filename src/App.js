import FileUpload from './fileUpload';
import { Login } from './login';
import { priceUpdate, priceUpdateMolding, priceUpdatePriceList } from './utility';
import { useState } from 'react';
import DisableAutoCheck from './DisableAutoCheck';
import MatchPriceTier from './MatchPriceTier';
import LoginForm from './SimpleCredential';
import UpdatePriceList from './UpdatePriceList';

function App() {
  const [username, setUsername] = useState(null)
  const handleClick = () => {
    setUsername(null)
  }

  if (!username) {
    return <LoginForm setLoggedIn={setUsername}></LoginForm>
  }

  return (
    <div className="h-full flex flex-col items-center bg-black text-white overflow-visible">
      <button className='absolute top-0 right-0 bg-cyan-500 hover:bg-cyan-600 rounded-full px-8 text-base' onClick={handleClick}> Log Out</button>
      <h1 className='text-4xl my-3'>Special Price Update Tool</h1>
      <div id='scroll' className=' w-full grow h-min-0 flex flex-col items-center space-y-10 overflow-y-auto'>
        <Login />
        <FileUpload username = {username} priceUpdate={priceUpdate} title={'Special price update Flooring'} indexArray={[1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]} />
        {/* <FileUpload username = {username} priceUpdate={priceUpdate} title={'Special price update Flooring'} indexArray={[1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]} /> */}
{/*  */}
        <FileUpload username = {username} priceUpdate={priceUpdateMolding} title={'Special price update Molding'} indexArray={[1, 6, 7, 8, 9, 10]} />
        <UpdatePriceList priceUpdate={priceUpdatePriceList} title={'Update Price List'} indexArray={[1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]} />
        
        {/* <FileUploadv2 username = {username} priceUpdate={priceUpdateTier} title={'Special price match price list'} /> */}
        <DisableAutoCheck username = {username}></DisableAutoCheck>
        <MatchPriceTier username = {username} />
      </div>
      
    </div>
  );
}

export default App;
