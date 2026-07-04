import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Edit from './components/Edit'
import Create from './components/Create'
import {ToastContainer} from 'react-toastify'


function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home></Home>} ></Route>
          <Route path='/edit/:id' element={<Edit></Edit>} ></Route>
          <Route path='/create' element={<Create></Create>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
