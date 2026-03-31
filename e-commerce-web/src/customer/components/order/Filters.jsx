import Checkbox from '@mui/material/Checkbox'
import React from 'react'

const orderstatus = ['On the way', 'Delivered', 'Cancelled', 'Returned'];

const Filters = () => {
    return (
        <aside className="w-full md:w-72 bg-white border border-gray-200 rounded-md p-4 shadow-2xl">
            <header className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
            </header>

            <div className="mb-3">
                <h3 className="text-sm font-medium text-black">ORDER STATUS</h3>
            </div>

            <div className="flex flex-col gap-2">
                {orderstatus.map((order, idx) => (
                    <label key={idx} className="flex items-center gap-2 py-1 cursor-pointer">
                        <Checkbox size="small" />
                        <span className="text-sm text-gray-700">{order}</span>
                    </label>
                ))}
            </div>
        </aside>
    )
}

export default Filters