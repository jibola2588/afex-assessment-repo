import React from 'react';
import topIcon from '../assets/images/Icon.svg'
import candle from '../assets/images/candle.svg'
import arrow from '../assets/images/arrow-down.svg'
import Widgets from './widgets';

const MainTop = () => {
  return (
    <div className="top">
    <div className="maintop flex gap-2 items-center h-[38px]">
         <p className='font-[Switzer] font-medium text-[14px] leading-[20px] tracking-[-0.1px] text-gray'>Home</p>
         <img 
         className='w-[4.65px] h-[10px] text-gray'
         src={topIcon} alt="" />
         <p
         className='
         font-[Switzer] font-medium text-[14px] leading-[20px] tracking-[-0.1px] text-primary'
         >Market</p>
    </div>
    <div className="innerTop mt-2 ">
        <div className='flex items-center justify-between flex-wrap'>
        <div
        className='left 
        font-[Switzer] font-semi-bold text-[28px] leading-[38px] tracking-[-0.8px] text-secondary
        '
        >Market</div>
        <div className='right flex items-center gap-2'>
              <div className=' box-border bg-white border border-topBorder rounded-[5px] shadow h-10 w-36 flex items-center justify-center gap-[6px] cursor-pointer'>
                  <h3 className='font-[Inter] font-semi-bold text-[14px] leading-[20px] text-secondary'>Page Setting</h3>
                  <img src={candle} alt="" className='text-[#292D32]'/>
              </div>
              <div  className='box-border bg-white border border-topBorder rounded-[5px] shadow h-10 w-24 flex items-center justify-center gap-[6px] cursor-pointer'>
                  <h3 className='font-[Inter] font-semi-bold text-[14px] leading-[20px] text-secondary'>Demo</h3>
                  <img src={arrow} alt="" className='text-[#292D32] '/>
              </div>
        </div>
        </div>
        <p 
         className='
         font-[Switzer] font-normal text-base leading-[24px] tracking-[-0.1px] text-gray'
        >Lorem ipsum dolor sit amet consectetur. Adipiscing egestas </p>
    </div>

    <div className='topBottom'>
        <Widgets/>
    </div>
</div>
  );
}

export default MainTop;
