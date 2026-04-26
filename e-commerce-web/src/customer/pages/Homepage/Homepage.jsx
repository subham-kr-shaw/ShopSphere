// import React from 'react'
// import Maincarosel from '../../components/Homecarosel/Maincarosel'
// import Homesection from '../Homesection/Homesection'

// const Homepage = () => {
//   return (
//     <div>
      
//       <div><Maincarosel/></div>
//       <div><Homesection/></div>
//     </div>
//   )
// }

// export default Homepage
import React from 'react'
import Maincarosel from '../../components/Homecarosel/Maincarosel'
import Homesection from '../Homesection/Homesection'

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Maincarosel />
      <Homesection />
    </div>
  )
}

export default Homepage