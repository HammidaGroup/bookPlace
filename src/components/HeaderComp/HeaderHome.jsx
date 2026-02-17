import React, { useContext, useEffect, useState } from 'react'
import "./Header.css"
import bookPlaceLogo from "/bookPlace.webp"
import addCartPng from "../../assets/add-to-cart.png";
import menuPng from "../../assets/menu.png"

import { MenuLogicContext } from '../../context/menuLogicContext'
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../context/CartCotext';
import JoinBtn from '../BtnCompo/JoinBtn';

import AddBookBtn from '../BtnCompo/AddBookBtn';


const HeaderHome = () => {

  const cartContextState = useContext(cartContext)
  const navigate = useNavigate();

  const menuLogicContext = useContext(MenuLogicContext)
//  console.log(searchContext.searchVal);
const [cartCount, setCartCount] = useState(0);
  
// console.log(cartContextState.cartUpd);

  const menuHandler = ()=>{
    if (menuLogicContext.menuVisbleConditionalData == true){
        menuLogicContext.setMenuVisbleConditionalData(false)
      
    }else{
        menuLogicContext.setMenuVisbleConditionalData(true)
    }
  }


  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const cartItems = JSON.parse(storedCart);
        setCartCount(cartItems.length);
      } catch (err) {
        console.error("Invalid cart data:", err);
        setCartCount(0);
      }
    } else {
      setCartCount(0);  
    }
    }, []);
const cartHandler = ()=>{
  navigate("/cart")

}

  return (
    <>
    <nav className='header' >
      <div className="leftH">
        <img onClick={() => navigate("/")} src={bookPlaceLogo} alt="BOOKPLACELogo" />
      </div>
      <div className="rightH">
       <div onClick={cartHandler} className="cart-div">
        <p>{cartCount}</p>
        <img className='cart-btn' src={addCartPng} alt="cart" />
       </div>
        <img className='menu-btn' src={menuPng} onClick={menuHandler} alt="menu" />
        
        {/* <SearchInp/> */}
      <AddBookBtn/>
      </div>
    </nav>
    </>
  )
}

export default HeaderHome