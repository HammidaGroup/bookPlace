import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    </>
  )
}

export default App