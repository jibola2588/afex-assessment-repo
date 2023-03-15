import React ,{useEffect} from 'react';
import MainContent from '../components/mainContent';
import Sidebar from '../components/sidebar';
import TickerTape  from '../components/tickertape'
import { getProduct } from '../utils/getProduct'

const Layout = () => {

  useEffect(() => { 
    getProduct()
  },[])
  
  return (
    <div className='flex'>
       <div className="left flex-2">
          <Sidebar/>
       </div>
      <div className="right flex-1">
        <MainContent />
      </div>
      
      <TickerTape  />
    </div>
  );
}

export default Layout;
