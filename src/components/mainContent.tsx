import React from 'react';
import MainTop from './mainTop';
import MainBottom from './mainBottom';

const MainContent = () => {
  return (
    <div className='bg-content h-screen px-6 pt-6'>
       <MainTop />
      <MainBottom />
    </div>
  );
}

export default MainContent;
