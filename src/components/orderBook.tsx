import React from 'react'
import SectionA from './sectionA'
import SectionB from './sectionB'


const OrderBook = () => {
    return ( 
        <div>
            <SectionA />
            <div className='grid grid-cols-1 gap-1'>
            <SectionB/>
            </div>
        </div>
    )
}

export default OrderBook