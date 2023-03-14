import React from 'react';
import graph1 from '../assets/images/graph1.png'
import graph2 from '../assets/images/graph2.png'
import graph3 from '../assets/images/graph3.png'


const Widgets = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-[30px]">
           <div 
        style={{boxShadow:'0px 1px 2px rgba(16, 24, 40, 0.04)',border:'1px solid #EAEBF0',borderRadius:'10px'}}
        className="left bg-white py-4 px-5 max-w-[413.67px]">
            <p className='
         font-[Switzer] font-medium text-base leading-[24px] tracking-[-0.1px] text-secondary'>Cash Balance</p>
            <div className='mt-4  xs:flex justify-between items-start'>
                 <div className=''>
                    <h3 className='-mt-2
         font-[Switzer] font-semi-bold text-[28px] leading-[38px] text-secondary'>N8,374,763</h3>
                    <div className='xs: flex items-center gap-2 mt-[10px]'>
                        <div className='bg-gRed py-[2px] px-2  rounded-[5px] flex items-center justify-center
                        '>
                           <p className=' text-lightRed cursor-pointer font-[Inter] font-medium text-[12px] leading-[18px] tracking-[-0.1px]'> Decline </p>
                            
                            </div>
                        <p className=' text-gray  font-[Inter] font-medium text-[13px] leading-[20px] tracking-[-0.1px]'>Monitored Monthly</p>
                    </div>
                 </div>
                 <div className='w-[158px] h-[55.81px]'>
                    <img src={graph1} alt="" className='w-[100%] h-[125%] object-cover ' />
                 </div>
            </div>
        </div>

         <div 
        style={{boxShadow:'0px 1px 2px rgba(16, 24, 40, 0.04)',border:'1px solid #EAEBF0',borderRadius:'10px'}}
        className="left bg-white py-4 px-5 flex-1 max-w-[413.67px]">
            <p className='
         font-[Switzer] font-medium text-base leading-[24px] tracking-[-0.1px] text-secondary'>Securities Value</p>
            <div className='mt-4  xs:flex justify-between items-start'>
                 <div className=''>
                    <h3 className='-mt-2
         font-[Switzer] font-semi-bold text-[28px] leading-[38px] text-secondary'>N8,374,763</h3>
                    <div className='xs: flex items-center gap-2 mt-[10px]'>
                        <div className='bg-gRed py-[2px] px-2  rounded-[5px]
                        '>
                           <p className=' text-lightRed cursor-pointer font-[Inter] font-medium text-[12px] leading-[18px] tracking-[-0.1px]'> Decline </p>
                            
                            </div>
                        <p className=' text-gray  font-[Inter] font-medium text-[13px] leading-[20px] tracking-[-0.1px]'>Monitored Monthly</p>
                    </div>
                 </div>
                 <div className='w-[158px] h-[55.81px]'>
                    <img src={graph2} alt="" className='w-[100%] h-[125%] object-cover ' />
                 </div>
            </div>
        </div>

        <div 
        style={{boxShadow:'0px 1px 2px rgba(16, 24, 40, 0.04)',border:'1px solid #EAEBF0',borderRadius:'10px'}}
        className="left bg-white py-4 px-5 flex-1  max-w-[413.67px]">
            <p className='
         font-[Switzer] font-medium text-base leading-[24px] tracking-[-0.1px] text-secondary'>Loan Balance</p>
            <div className='mt-4  xs:flex justify-between items-start'>
                 <div className=''>
                    <h3 className='-mt-2
         font-[Switzer] font-semi-bold text-[28px] leading-[38px] text-secondary'>N8,374,763</h3>
                    <div className='xs: flex items-end gap-2 mt-[10px]'>
                        <div className='bg-gGreen py-[2px] px-2  rounded-[5px]
                        '>
                           <p className=' text-green cursor-pointer font-[Inter] font-medium text-[12px] leading-[18px] tracking-[-0.1px]'>Increment</p>
                            
                            </div>
                        <p className=' text-gray  font-[Inter] font-medium text-[13px] leading-[20px] tracking-[-0.1px]'>Monitored Monthly</p>
                    </div>
                 </div>
                 <div className='w-[158px] h-[55.81px]'>
                    <img src={graph3} alt="" className='w-[100%] h-[111%] object-cover' />
                 </div>
            </div>
        </div>
      </div>
  );
}

export default Widgets;
