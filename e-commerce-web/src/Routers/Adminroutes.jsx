// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Admin from '../admin/component/admin'


// const Adminroutes = () => {
//   return (
//     <div>
//         <Routes>
//             <Route path='/*' element={<Admin/>}></Route>
//         </Routes>
//     </div>
//   )
// }

// export default Adminroutes

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../admin/component/admin'
import ProtectedRoute from '../customer/components/protected/ProtectedRoute'

const Adminroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/*' element={
                    <ProtectedRoute requiredRole="admin">
                        <Admin />
                    </ProtectedRoute>
                } />
            </Routes>
        </div>
    );
};

export default Adminroutes;