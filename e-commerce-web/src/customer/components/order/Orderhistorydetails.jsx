import React from 'react'
import Address from '../userdetail/Address'
import Ordertracker from './Ordertracker'
import Cartwithreview from './Cartwithreview'

const Orderhistorydetails = () => {
  return (
    <div className='px-4 md:px-20'>
      <div className='mt-4 md:mt-0'>
        <Address/>
      </div>
      <div className='w-full mt-4'>
        <Ordertracker/>
      </div>
      <div className='mt-4'>
        <Cartwithreview/>
        <Cartwithreview/>
        <Cartwithreview/>
        <Cartwithreview/>
      </div>
    </div>
  )
}

export default Orderhistorydetails