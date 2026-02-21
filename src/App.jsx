import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'
import Contact from './components/CardComponents/Contact'
import About from './pages/About'
import AddBook from './pages/AddBook'
import JoinPage from './pages/JoinPage'
import LoginSuccess from './middlewares/LoginSuccess'
import OpenInChrome from './middlewares/OpenInChrome'
import Class9thPage from './pages/Class9thPage'
import Class10thPage from './pages/Class10thPage'
import Class11thPage from './pages/Class11thPage'
import Class12thPage from './pages/Class12thPage'
import DashBoardPage from './pages/DashBoardPage'
import AnalyticsTracker from './components/AnalyticsTracker'

const App = () => {
  return (
    <>
    
      
      <AnalyticsTracker/>
    <Routes>

      <Route path='/' element={<HomePage/>}/>
  
   <Route path="/login-success" element={<LoginSuccess />} />
  

<Route path="/open-in-chrome" element={<OpenInChrome />} />
<Route path='/class9thBook' element={<Class9thPage/>}/>
<Route path='/class10thBook' element={<Class10thPage/>}/>
<Route path='/class11thBook' element={<Class11thPage/>}/>
<Route path='/class12thBook' element={<Class12thPage/>}/>
<Route path='/DashBoard' element={<DashBoardPage/>}/>


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