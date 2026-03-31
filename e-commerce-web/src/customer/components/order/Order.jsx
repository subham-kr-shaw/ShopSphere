import React from 'react'
import Filters from './Filters'
import Ordercart from './Ordercart'

const Order = () => {
    return (
        <div className=' md:flex p-4'>
            <div className='md:mr-4'><Filters /></div>
            <div>
                <Ordercart />
                <Ordercart />
                <Ordercart />
                <Ordercart />
                <Ordercart />
                <Ordercart />
                <Ordercart />
                <Ordercart />
            </div>
        </div>
    )
}

export default Order