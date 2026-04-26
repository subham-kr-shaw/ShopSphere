import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Customerroutes from './Routers/Customerroutes'
import Adminroutes from './Routers/Adminroutes'


function App() {

  return (
    <>
      <Routes>
         <Route path='/*' element={<Customerroutes/>}></Route>
         <Route path='/admin/*' element={<Adminroutes/>}></Route>
      </Routes>
    </>
  )
}

export default App
