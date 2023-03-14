import React from 'react'

const TableA = () =>  { 

    return ( 
        <div 
        style={{
            boxShadow:' 0px 1px 2px rgba(16, 24, 40, 0.04)'
        }}
        className="rounded-[10px] border border-[#EAEBF0] bg-white overflow-x-auto">
            <div className='px-6 pt-4 pb-6 border-b border-[#EAEBF0] font-[Switzer] font-semi-bold text-[18px] leading-[24px] tracking-[-0.1px] text-secondary'>
                Buy Board
            </div>
  <table className="min-w-full divide-y-1 divide-[#EAEBF0] text-sm">
    <thead className='border-b border-[#EAEBF0]'> 
      <tr>
        <th
          className="whitespace-nowrap px-6 py-4 text-left  text-gray font-[Switzer] text-[14px] leading-[18px] tracking-[-0.1px] font-semi-bold "
        >
          Product
        </th>
        <th
          className="whitespace-nowrap px-6 py-4 text-left  text-gray font-[Switzer] text-[14px] leading-[18px] tracking-[-0.1px] font-semi-bold "
        >
          Quantity
        </th>
        <th
          className="whitespace-nowrap px-6 py-4 text-left  text-gray font-[Switzer] text-[14px] leading-[18px] tracking-[-0.1px] font-semi-bold "
        >
          Price
        </th>
        <th
          className="whitespace-nowrap px-6 py-4 text-left  text-gray font-[Switzer] text-[14px] leading-[18px] tracking-[-0.1px] font-semi-bold "
        >
         Action
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

export default TableA

interface ItableProps{ 
    type : string
}


const TableRow = ({type}:ItableProps) => { 
    let data;

    switch(type){ 

      case 'A' : 
      data = { 
        product:'Soyabeans (SSBS)',
        qty:2003,
      }
      break;
      case 'B' : 
      data = { 
        product:'Paddy Rice (SPRL)',
        qty:86,
      }
      break;
      case 'C' : 
      data = { 
        product:'Maize (SMAZ)',
        qty:2003,
      }
      break;
      case 'D' : 
      data = { 
        product:'Sorghum (SSGM)',
        qty:2003,
      }
      break;
      case 'E' : 
      data = { 
        product:'Fair Trade ETC (FETC)',
        qty:2003,
      }
      break;
      case 'F' : 
      data = { 
        product:'Soyabeans (SSBS)',
        qty:2003,
      }
       break;
      case 'G' : 
      data = { 
        product:'Soyabeans (SSBS)',
        qty:2003,
      }
    }

    return(
        <tr className='border-b border-[#EAEBF0]'>
      <td
          className="whitespace-nowrap pl-6 py-4 text-left  text-secondary font-[Switzer] text-[14px] leading-[20px] tracking-[-0.1px] font-medium "
        >
        { data?.product }
        </td>
        <td
          className="whitespace-nowrap pl-6 py-4 text-left  text-secondary font-[Switzer] text-[14px] leading-[20px] tracking-[-0.1px] font-medium "
        >
          { data?.qty } 
        </td>
        <td
          className="whitespace-nowrap pl-6 py-4 text-left  text-DGreen font-[Switzer] text-[14px] leading-[20px] tracking-[-0.1px] font-medium "
        >
          6,471.39
        </td>
        <td className="whitespace-nowrap pl-6 py-4 text-left flex items-start">
            <div className='cursor-pointer rounded-[5px] py-[2px] px-2 flex items-center justify-center bg-[#E7FDE9] text-[#259A2E] font-medium text-[13px] leading-[18px] tracking-[-0.1px]'>
                Buy
            </div>
        </td>
        
      </tr>
    )
}