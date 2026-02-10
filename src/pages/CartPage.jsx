
import React, { useContext, useEffect, useState } from 'react';
import "./CartPages.css";
import Header from '../components/Header';
import Menu from '../components/Menu';
import { cartContext } from '../context/CartCotext';

const CartPage = () => {
     const cartCotextState = useContext(cartContext)
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCotextState.setCartUpd(cart.length)
    setCartItems(cart);

  }, []);

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  };

  return (
    <>
    <Header/>
    <div className="cart-page">
        <Menu/>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, idx) => (
            <div className="cart-item" key={idx}>
              <img src={item.img} alt={item.class} className="cart-item-img" />
              <div className="cart-item-info">
                <h3>{item.class}</h3>
                <p>{item.desc}</p>
                <span>₹{item.price}</span>
                <button className="remove-btn" onClick={() => removeFromCart(idx)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <span>Total: ₹{getTotal()}</span>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default CartPage;