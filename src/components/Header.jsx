import React, { useContext, useState } from 'react'
import "./Header.css"
import jameeIndiaLogo from "../assets/bookPlace.png"
import addCartPng from "../assets/add-to-cart.png";
import menuPng from "../assets/menu.png"

import { MenuLogicContext } from '../context/menuLogicContext'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const menuLogicContext = useContext(MenuLogicContext)
//  console.log(searchContext.searchVal);
 
  const menuHandler = ()=>{
    if (menuLogicContext.menuVisbleConditionalData == true){
        menuLogicContext.setMenuVisbleConditionalData(false)
      
    }else{
        menuLogicContext.setMenuVisbleConditionalData(true)
    }
  }

  return (
    <>
    <nav className='header' >
      <div className="leftH">
        <img onClick={() => navigate("/")} src={jameeIndiaLogo} alt="jameeIndiaLogo" />  
      </div>
      <div className="rightH">
       <img className='cart-btn' src={addCartPng} alt="cart" />
        <img className='menu-btn' src={menuPng} onClick={menuHandler} alt="menu" />
      </div>
    </nav>
    </>
  )
}

export default Header