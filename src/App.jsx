import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'
import Contact from './components/CardComponents/Contact'
import About from './pages/About'
import AddBook from './pages/AddBook'
import JoinPage from './pages/JoinPage'
import LoginSuccess from './middlewares/LoginSuccess'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login-success' element={<LoginSuccess/>}/>
      <Route path='/join' element={<JoinPage/>}/>
      <Route path='/AddBook' element={<AddBook/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    </>
  )
}

export default App