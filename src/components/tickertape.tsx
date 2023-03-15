import React from 'react'
import {data} from '../assets/data'
import Marquee from "react-fast-marquee";

const TickerTape = () => { 
    
    return (
        <div className='fixed bottom-0 left-[7.2%] tape  h-[51px] outline-none border-none w-full'>
       <div className='relative'>
       <div className='absolute top-0 left-0  bg-black w-[164px] h-[51px] z-50 box-border font-[Switzer] font-medium text-[18px] leading-[24px] flex items-center justify-center text-white'>
           Live Market
        </div>
        <div className ='absolute top-0 left-0 bg-white box-border z-10 h-[51px] py-[7px]  outline-none border-none flex-1'>
              <Marquee speed={100} gradient={false}>
          <div className='flex items-center box-border gap-20'>
           { 
             data?.map(item => ( 
                <div 
                key={item?.id}
                className='font-[Switzer] text-sm leading-[18.48px] text-black flex flex-col'>
                    <span className='font-medium'>{item?.product}</span>
                    <span className='font-normal '>₦{item?.price}</span>
                </div>
             ))
           }
          
          </div>
           </Marquee>
        </div>
       </div>
    </div>
    )
}

export default TickerTape 