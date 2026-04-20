import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../admin/component/admin'


const Adminroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/*' element={<Admin/>}></Route>
        </Routes>
    </div>
  )
}

export default Adminroutes