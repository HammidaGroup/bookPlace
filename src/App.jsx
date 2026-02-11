import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'
import Contact from './components/CardComponents/Contact'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    </>
  )
}

export default App