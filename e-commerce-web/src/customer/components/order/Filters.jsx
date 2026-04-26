import React from 'react'

const orderstatuses = ['PENDING', 'PLACED', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED'];

const statusconfig = {
    PENDING:   { label: 'Pending',   color: 'bg-gray-100   text-gray-600   border-gray-400',   dot: 'bg-gray-400'   },
    PLACED:    { label: 'Placed',    color: 'bg-teal-100   text-teal-700   border-teal-500',    dot: 'bg-teal-500'   },
    CONFIRMED: { label: 'Confirmed', color: 'bg-blue-100   text-blue-700   border-blue-500',    dot: 'bg-blue-500'   },
    SHIPPED:   { label: 'Shipped',   color: 'bg-indigo-100 text-indigo-700 border-indigo-500',  dot: 'bg-indigo-500' },
    DELIVERED: { label: 'Delivered', color: 'bg-green-100  text-green-700  border-green-500',   dot: 'bg-green-500'  },
    CANCELLED: { label: 'Cancelled', color: 'bg-red-100    text-red-600    border-red-400',     dot: 'bg-red-400'    },
};

const Filters = ({ activestatus }) => {
    return (
        <aside className="w-full bg-white border border-gray-200 rounded-xl p-5 shadow-sm sticky top-4">
            <header className="mb-4 border-b pb-3">
                <h2 className="text-base font-semibold text-gray-800">Order Status</h2>
                <p className="text-xs text-gray-400 mt-1">
                    {activestatus
                        ? `Currently: ${statusconfig[activestatus]?.label}`
                        : 'Click an order to see its status'}
                </p>
            </header>

            <div className="flex flex-col gap-2">
                {orderstatuses.map((status) => {
                    const isactive = activestatus === status;
                    const config = statusconfig[status];

                    return (
                        <div
                            key={status}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all duration-300
                                ${isactive
                                    ? `${config.color} border-2 font-semibold shadow-sm`
                                    : 'border-gray-100 text-gray-400 bg-gray-50'
                                }`}
                        >
                            {/* Status dot */}
                            <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                                isactive ? config.dot : 'bg-gray-300'
                            }`} />

                            <span className="text-sm flex-1">{config.label}</span>

                            {/* ✅ Active indicator */}
                            {isactive && (
                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">
                                    ●
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>

            <p className="text-[11px] text-gray-300 mt-4 text-center italic">
                Read-only · updated by admin
            </p>
        </aside>
    );
};

export default Filters;
// import React from 'react'

// const orderstatuses = ['PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED'];

// const statuslabels = {
//     PENDING: 'Pending',
//     CONFIRMED: 'Confirmed',
//     SHIPPED: 'Shipped',
//     DELIVERED: 'Delivered',
//     CANCELLED: 'Cancelled',
// };

// // ✅ Status color when active/highlighted
// const statuscolors = {
//     PENDING: 'bg-gray-100 text-gray-700 border-gray-400',
//     CONFIRMED: 'bg-blue-100 text-blue-700 border-blue-500',
//     SHIPPED: 'bg-indigo-100 text-indigo-700 border-indigo-500',
//     DELIVERED: 'bg-green-100 text-green-700 border-green-500',
//     CANCELLED: 'bg-red-100 text-red-700 border-red-500',
// };

// const Filters = ({ activestatus }) => {
//     return (
//         <aside className="w-full bg-white border border-gray-200 rounded-xl p-5 shadow-sm sticky top-4">
//             <header className="mb-4 border-b pb-3">
//                 <h2 className="text-base font-semibold text-gray-800">Order Status</h2>
//                 {activestatus ? (
//                     <p className="text-xs text-gray-400 mt-1">Showing status of selected order</p>
//                 ) : (
//                     <p className="text-xs text-gray-400 mt-1">Click an order to see its status</p>
//                 )}
//             </header>

//             <div className="flex flex-col gap-2">
//                 {orderstatuses.map((status) => {
//                     const isactive = activestatus === status;
//                     return (
//                         <div
//                             key={status}
//                             className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all duration-200 ${
//                                 isactive
//                                     ? `${statuscolors[status]} border-2 font-semibold`
//                                     : 'border-gray-100 text-gray-400 bg-gray-50'
//                             }`}
//                         >
//                             {/* ✅ Read-only indicator dot — no checkbox, no interaction */}
//                             <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
//                                 isactive ? 'bg-current' : 'bg-gray-300'
//                             }`} />
//                             <span className="text-sm">{statuslabels[status]}</span>
//                             {isactive && (
//                                 <span className="ml-auto text-xs font-bold uppercase tracking-wide">
//                                     ← current
//                                 </span>
//                             )}
//                         </div>
//                     );
//                 })}
//             </div>

//             {/* ✅ Legend note */}
//             <p className="text-[11px] text-gray-300 mt-4 text-center">
//                 Status is read-only
//             </p>
//         </aside>
//     );
// };

// export default Filters;