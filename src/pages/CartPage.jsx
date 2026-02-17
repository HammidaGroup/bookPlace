
import React, { useContext, useEffect, useState } from 'react';
import "./CartPages.css";
import HeaderHome from '../components/HeaderComp/HeaderHome';
import Menu from '../components/Menu';
import { cartContext } from '../context/CartCotext';
import CartOrdBtn from '../components/BtnCompo/CartOrdBtn';
import Footer from '../components/Footer';

const CartPage = () => {
     const cartCotextState = useContext(cartContext)
  const [cartItems, setCartItems] = useState([]);
 
  let ordBtn ;
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCotextState.setCartUpd(cart.length)
    console.log(cartCotextState);
    
    setCartItems(cart);

   

  }, []);

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.bookPrice, 0);
  };

   if (cartItems.length === 0) {
      ordBtn = "";
      
      
    }else{
      
      
      ordBtn= <CartOrdBtn value = {cartItems} total={getTotal()}/>
    }

  return (
    <>
    <HeaderHome/>
    <div className="cart-page">
        <Menu/>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, idx) => (
            <div className="cart-item" key={idx}>
              <img src={item.bookImg} alt={item.bookClass} className="cart-item-img" />
              <div className="cart-item-info">
                <h3>{item.bookClass}</h3>
                <p>{item.bookDesc}</p>
                <span>₹{item.bookPrice}</span>
                <button className="remove-btn" onClick={() => removeFromCart(idx)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <span>Total: ₹{getTotal()}</span>
          <CartOrdBtn value = {cartItems} total={getTotal()}/>
          </div>
        </div>
      )}
     
    </div>
    </>
  );
};

export default CartPage;