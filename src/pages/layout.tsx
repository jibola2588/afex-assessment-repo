import React from 'react';
import MainContent from '../components/mainContent';
import Sidebar from '../components/sidebar';

const Layout = () => {
  return (
    <div className='flex'>
       <div className="left flex-2">
          <Sidebar/>
       </div>
      <div className="right flex-1">
        <MainContent />
      </div>
      
      <div className='fixed bottom-0 left-[7.2%] tape  flex items-center h-[51px] outline-none border-none w-full'>
          <div className='flex-2 bg-black w-[164px] h-[51px] z-50 box-border font-[Switzer] font-medium text-[18px] leading-[24px] flex items-center justify-center text-white'>
             Live Market
          </div>
          <div className ='bg-white box-border z-10 h-[51px] py-[7px]  outline-none border-none flex-1'>
          hello
          </div>
      </div>
    </div>
  );
}

export default Layout;
