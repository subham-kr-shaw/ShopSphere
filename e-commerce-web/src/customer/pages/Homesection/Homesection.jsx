// import React, { useMemo } from 'react'
// import Homesectioncarosel from '../../components/homesectioncardcarosel/Homesectioncarosel'
// import homesectiondata from './homesectiondata'

// const Homesection = () => {
//   // ✅ pick a random section from homesectiondata for "Trending"
//   const trendingsection = useMemo(() => {
//     const randomindex = Math.floor(Math.random() * homesectiondata.length);
//     return homesectiondata[randomindex];
//   }, []);

//   return (
//     <div className="py-6 flex flex-col gap-10">

//       {/* ✅ Trending section — random items, fixed title */}
//       <div className="px-4 lg:px-10">
//         <div className="flex items-end justify-between mb-4">
//           <div>
//             <h2 className="text-xl font-bold text-gray-900 tracking-tight">Trending Items</h2>
//             <p className="text-sm text-gray-500 mt-0.5">What everyone is wearing right now</p>
//           </div>
//           <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition">
//             View All →
//           </button>
//         </div>
//         <div className="h-[2px] w-16 bg-indigo-600 rounded mb-4" />
//         <Homesectioncarosel items={trendingsection.items} />
//       </div>

//       {/* ✅ Rest of sections from data */}
//       {homesectiondata.map((section, idx) => (
//         <div key={idx} className="px-4 lg:px-10">
//           <div className="flex items-end justify-between mb-4">
//             <div>
//               <h2 className="text-xl font-bold text-gray-900 tracking-tight">{section.title}</h2>
//               <p className="text-sm text-gray-500 mt-0.5">{section.subtitle}</p>
//             </div>
//             <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition">
//               View All →
//             </button>
//           </div>
//           <div className="h-[2px] w-16 bg-indigo-600 rounded mb-4" />
//           <Homesectioncarosel items={section.items} />
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Homesection
import React, { useMemo } from 'react'
import Homesectioncarosel from '../../components/homesectioncardcarosel/Homesectioncarosel'
import homesectiondata from './homesectiondata'

const Homesection = () => {

  // ✅ collect one unique item per route from ALL sections
  // const trendingitems = useMemo(() => {
  //   const seen = new Set();
  //   const result = [];
  //   homesectiondata.forEach(section => {
  //     section.items.forEach(item => {
  //       if (!seen.has(item.to)) {
  //         seen.add(item.to);
  //         result.push(item);
  //       }
  //     });
  //   });
  //   return result;
  // }, []);

  return (
    <div className="py-6 flex flex-col gap-10">

      {/* ✅ Trending — one item from every category across all sections */}
      {/* <div className="px-4 lg:px-10">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">Trending Items</h2>
            <p className="text-sm text-gray-500 mt-0.5">Top picks across all categories</p>
          </div>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition">
            View All →
          </button>
        </div> */}
        {/* <div className="h-[2px] w-16 bg-indigo-600 rounded mb-4" />
        <Homesectioncarosel items={trendingitems} /> */}
      {/* </div> */}

      {/* Rest of sections */}
      {homesectiondata.map((section, idx) => (
        <div key={idx} className="px-4 lg:px-10">
          <div className="flex items-end justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">{section.title}</h2>
              <p className="text-sm text-gray-500 mt-0.5">{section.subtitle}</p>
            </div>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition">
              View All →
            </button>
          </div>
          <div className="h-[2px] w-16 bg-indigo-600 rounded mb-4" />
          <Homesectioncarosel items={section.items} />
        </div>
      ))}
    </div>
  )
}

export default Homesection