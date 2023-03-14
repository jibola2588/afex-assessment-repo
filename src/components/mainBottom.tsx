import react,{useState} from 'react'
import PriceHistory from './priceHistory'
import OrderBook from './orderBook'
import ProductView from './productView'
import ClosedTrade from './closedTrades'
import CanceledTrade from './canceledTrades'
import OpenOrders from './openOrders'

const MainBottom = () => { 
    const [currentTab, setCurrentTab] = useState('1')

    const tabs = [
        {
          id: '1',
          tabTitle: 'Product View',
          content: <ProductView  />
        },
        {
          id: '2',
          tabTitle: 'Order Book',
          content: <OrderBook />
         
        },
        {
          id: '3',
          tabTitle: 'Price History',
           content: <PriceHistory/>
        },
        {
          id: '4',
          tabTitle: `Open Orders`,
           tabNot:10,
          content: <OpenOrders />
        },
        {
          id: '5',
          tabTitle: 'Closed Trades',
          tabNot:20,
          content: <ClosedTrade />
        },
        {
          id: '6',
          tabTitle: 'Canceled Trades',
           tabNot:20,
          content: <CanceledTrade />
        },
      ]
  
      const handleTabClick = (e: any) => {
        console.log(e.target.id)
        setCurrentTab(e.target.id)
      }

    return ( 
        <div className='bottom mt-8'>
            <div className='top flex flex-wrap gap-[20px] border-b border-[#EAEBF0]'>
                 {tabs.map((tab, i) => (
          <button
            key={i}
            className='text-gray pt-[7px] pb-[15px] 
            flex items-center gap-2
            text-[15px] font-semi-bold tracking-[-0.1px] leading-[22px] active:text-secondary font-[Switzer] cursor-pointer outline-none border-primary disabled:border-b-[2px]  disabled:text-primary rounded-none  disabled:leading-[20px] disabled:font-semi-bold disabled:text-sm disabled:font-[Inter]'
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
           {tab.tabTitle}
          { tab.tabNot && <span className='px-[6px] bg-[#EFEFF1] flex items-center justify-center text-secondary rounded-[20px]
            font-semi-bold font-[Inter] text-[13px] leading-[18px] tracking-[-0.1px]'>{ tab.tabNot}</span>}
          </button>
        ))}
            </div>
            <div 
            style={{height:'200px'}}
            className='bottom py-[25px] overflow-y-auto scrollbar-hide'>
            {tabs.map((tab, i) => (
            <div key={i}>
              {currentTab === `${tab.id}` && (
                <div>
                  <p>{tab.content}</p>
                </div>
              )}
            </div>
          ))}
            </div>
        </div>
    )
}

export default MainBottom