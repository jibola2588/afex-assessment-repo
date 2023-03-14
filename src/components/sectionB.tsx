import React from 'react'

const SectionB = () =>  { 

    return ( 
        <div 
        style={{
            boxShadow:' 0px 1px 2px rgba(16, 24, 40, 0.04)'
        }}
        className="overflow-x-auto  mt-6 rounded-[10px] border border-[#EAEBF0] bg-white">
            <div className='px-6 pt-4 pb-6 border-b border-[#EAEBF0] font-[Switzer] font-semi-bold text-[18px] leading-[24px] tracking-[-0.1px] text-secondary'>
              Trade Log
            </div>
  <table className="min-w-full divide-y-1 divide-[#EAEBF0] text-sm">
    <thead className='border-b border-[#EAEBF0]'> 
      <tr>
        <th
          className="whitespace-nowrap px-6 py-4 text-left  text-gray font-[Switzer] text-[14px] leading-[18px] tracking-[-0.1px] font-semi-bold "
        >
          Security
        </th>
        <th
          className="whitespace-nowrap px-6 py-4 text-left  text-gray font-[Switzer] text-[14px] leading-[18px] tracking-[-0.1px] font-semi-bold "
        >
          Board
        </th>
        <th
          className="whitespace-nowrap px-6 py-4 text-left  text-gray font-[Switzer] text-[14px] leading-[18px] tracking-[-0.1px] font-semi-bold "
        >
          Order Type
        </th>
        <th
          className="whitespace-nowrap px-6 py-4 text-left  text-gray font-[Switzer] text-[14px] leading-[18px] tracking-[-0.1px] font-semi-bold "
        >
         Matched Price
        </th>
        <th
          className="whitespace-nowrap px-6 py-4 text-left  text-gray font-[Switzer] text-[14px] leading-[18px] tracking-[-0.1px] font-semi-bold "
        >
         Quantity
        </th>
        <th
          className="whitespace-nowrap px-6 py-4 text-left  text-gray font-[Switzer] text-[14px] leading-[18px] tracking-[-0.1px] font-semi-bold "
        >
         Date
        </th>
        <th
          className="whitespace-nowrap px-6 py-4 text-left  text-gray font-[Switzer] text-[14px] leading-[18px] tracking-[-0.1px] font-semi-bold "
        >
        Time
        </th>
      
      </tr>
    </thead>

    <tbody className="divide-y-1 divide-[#EAEBF0]">
     <TableRow type = 'A'/>
     <TableRow type = 'B' />
     <TableRow type = 'C' />
     <TableRow type = 'D'/>
     <TableRow type = 'E'/>
     <TableRow type = 'F'/>
     <TableRow type = 'G'/>
    </tbody>
  </table>
</div>

    )
}

export default SectionB

interface ItableProps{ 
    type : string
}



const TableRow = ({type}:ItableProps) => { 
    let data; 

    switch(type){ 

      case 'A' : 
      data = { 
        security:'Soyabeans (SSBS)',
        board:'X-Traded',
        type:'Sell',
        qty:2003,
      }
      break;
      case 'B' : 
      data = { 
       security:'Paddy Rice (SPRL)',
        board:'X-Traded',
        type:'Sell',
        qty:86,
      }
      break;
      case 'C' : 
      data = { 
        security:'Maize (SMAZ)',
        board:'OTC',
        type:'Buy',
        qty:2003,
      }
      break;
      case 'D' : 
      data = { 
        security:'Sorghum (SSGM)',
        board:'FI',
        type:'Buy',
        qty:2003,
      }
      break;
      case 'E' : 
      data = { 
        security:'Fair Trade ETC (FETC)',
        board:'FI',
        type:'Buy',
        qty:2003,
      }
      break;
      case 'F' : 
      data = { 
        security:'Soyabeans (SSBS)',
        board:'X-Traded',
        type:'Sell',
        qty:86,
      }
       break;
      case 'G' : 
      data = { 
        security:'Soyabeans (SSBS)',
        board:'Derivatives',
        type:'Sell',
        qty:86,
      }
    }

    return(
        <tr className='border-b border-[#EAEBF0]'>
      <td
          className="whitespace-nowrap pl-6 py-4 text-left  text-secondary font-[Switzer] text-[14px] leading-[20px] tracking-[-0.1px] font-medium "
        >
        { data?.security }
        </td>
        <td
          className="whitespace-nowrap pl-6 py-4 text-left  text-secondary font-[Switzer] text-[14px] leading-[20px] tracking-[-0.1px] font-medium "
        >
          { data?.board } 
        </td>
        <td
          className="whitespace-nowrap pl-6 py-4 text-left  text-secondary font-[Switzer] text-[14px] leading-[20px] tracking-[-0.1px] font-medium "
        >
          { data?.type } 
        </td>
        <td
          className="whitespace-nowrap pl-6 py-4 text-left  text-secondary font-[Switzer] text-[14px] leading-[20px] tracking-[-0.1px] font-medium "
        >
        1792.65
        </td>
        <td
          className="whitespace-nowrap pl-6 py-4 text-left  text-secondary font-[Switzer] text-[14px] leading-[20px] tracking-[-0.1px] font-medium "
        >
          { data?.qty } 
        </td>
        <td
          className="whitespace-nowrap pl-6 py-4 text-left  text-secondary font-[Switzer] text-[14px] leading-[20px] tracking-[-0.1px] font-medium "
        >
          17 Oct, 2020
        </td>
        <td
          className="whitespace-nowrap pl-6 py-4 text-left  text-secondary font-[Switzer] text-[14px] leading-[20px] tracking-[-0.1px] font-medium "
        >
          07:38
        </td>
    
        
  </tr>
    )
}