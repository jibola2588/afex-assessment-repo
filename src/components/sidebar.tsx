import React from 'react';
import logo from '../assets/images/Rectangle.png'
import dash from '../assets/images/dash.svg'
import trend from '../assets/images/home-trend-up.svg'
import user from '../assets/images/profile-2user.svg'
import exist from '../assets/images/exit.svg'
import  text from '../assets/images/document-text.svg'
import settings from '../assets/images/gear 1.svg'
import wallet from '../assets/images/wallet-minus.svg'
import './sidebar.css'


const Sidebar = () => {
  return (
    <div className='px-4 pt-6 pb-8 bg-white flex flex-col justify-between h-screen items-center border-r border-sideNav cursor-pointer'>
       <div className="top">
          <div className='mb-[14px] logo h-[38px] w-[66px]'>
             <img src={logo}
             style={{objectFit:'cover',height:'100%',width:'100%'}}
             alt="image of the logo" />
          </div>
          <div className="topIconWrapper flex flex-col justify-between items-center gap-2">
             <div className="h-12 w-12  flex items-center justify-center relative">
                 <img src={dash} alt=""  className='dashIcon'/>
                 <span 
                style={{boxShadow:'0px 10px 13px -7px #000000'}}
                 className='dash absolute left-[72px] top-[8px] rounded-[5px] px-3 bg-black z-50 font-[Switzer] font-medium text-[10px] leading-[24px] flex items-center justify-center text-white'>Dashboard</span>
             </div>
             <div className="h-12 w-12  flex items-center justify-center bg-gIcons relative">
                <img src={trend} alt=""className='trendIcon' />
                <span 
              
              className='trend absolute left-[72px] top-[8px] shadow-xl rounded-[5px] px-3 bg-black z-50 font-[Switzer] font-medium text-[10px] leading-[24px] flex items-center justify-center text-white'>Trend</span>
             </div>
             <div className="h-12 w-12  flex items-center justify-center relative">
                <img src={wallet} alt="" className='walletIcon'/>
                <span 
                style={{boxShadow:'0px 10px 13px -7px #000000'}}
              className='wallet absolute left-[72px] top-[8px] shadow-xl rounded-[5px] px-3 bg-black z-50 font-[Switzer] font-medium text-[10px] leading-[24px] flex items-center justify-center text-white'>Portfolio</span>
             </div>
             <div className="h-12 w-12  flex items-center justify-center relative">
                <img src={user} alt="" className='userIcon'/>
                <span 
                style={{boxShadow:'0px 10px 13px -7px #000000'}}
              className='user absolute left-[72px] top-[8px] shadow-xl rounded-[5px] px-3 bg-black z-50 font-[Switzer] font-medium text-[10px] leading-[24px] flex items-center justify-center text-white'>Community</span>
             </div>
             <div className="h-12 w-12  flex items-center justify-center relative">
                <img src={text} alt="" className='textIcon'/>
                <span 
                style={{boxShadow:'0px 10px 13px -7px #000000'}}
              className='text absolute left-[72px] top-[8px] shadow-xl rounded-[5px] px-3 bg-black z-50 font-[Switzer] font-medium text-[10px] leading-[24px] flex items-center justify-center text-white'>Reports</span>
             </div>
          </div>
       </div>
       <div className="bottom flex flex-col gap-1">
       <div className="h-12 w-12  flex items-center justify-center relative">
                <img src={settings} alt="" className='settingIcon' />
                <span 
                style={{boxShadow:'0px 10px 13px -7px #000000'}}
              className='setting absolute left-[72px] top-[8px] shadow-xl rounded-[5px] px-3 bg-black z-50 font-[Switzer] font-medium text-[10px] leading-[24px] flex items-center justify-center text-white'>Settings</span>
         </div>
        <div className="h-12 w-12  flex items-center justify-center relative">
                <img src={exist} alt="" className='logoutIcon'/>
                 <span 
                style={{boxShadow:'0px 10px 13px -7px #000000'}}
              className='logout setting absolute left-[72px] top-[8px] shadow-xl rounded-[5px] px-3 bg-black z-50 font-[Switzer] font-medium text-[10px] leading-[24px] flex items-center justify-center text-white'>Logout</span>
        </div>
       </div>
    </div>
  );
}

export default Sidebar;
