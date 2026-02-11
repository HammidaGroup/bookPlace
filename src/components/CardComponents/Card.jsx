import React, { useContext, useState } from "react";
import "./Card.css";
import addCartPng from "../../assets/add-to-cart.png";

import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/CartCotext";

const BookCard = ({ value }) => {
  const navigate = useNavigate();
 const cartCotextState = useContext(cartContext)
  

  const contactHandler = (e) => {
    e.stopPropagation();
const message = `Hello Sir/Madam,

I am interested in buying this second-hand book.

📘 Class: ${value.class}
💰 Price: ₹${value.price}
🖼 Image: ${value.img}

Kindly share more details regarding the book condition.
Looking forward to your response.
`;


    const url = `https://wa.me/917571950460?text=${encodeURIComponent(message)}`;
    window.location.href = url;
    // navigate("/contact")
  };

  const addCartHandler = () => {
  let cart = [];

  // safe read from localStorage
  try {
    const storedCart = localStorage.getItem("cart");
    cart = storedCart ? JSON.parse(storedCart) : [];
  } catch (err) {
    console.error("Invalid cart data, resetting...");
    cart = [];
    localStorage.removeItem("cart");
  }

  // check if book already exists
  const alreadyInCart = cart.some(
    (item) => item.class === value.class && item.price === value.price
   && item.desc === value.desc);

  if (alreadyInCart) {
    alert("This book is already in your cart 📚");
    return;
  }

  // add book with quantity
  cart.push({
    ...value,
    qty: 1
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Book Added In Cart")
  // cartCotextState.setcartUpd()
  // console.log(cartCotextState);
  
 
};


  return (
    <div className="book-card">
      <div className="book-img">
        <img className="bookImg" src={value.img} alt="book" />
        <img
          src={addCartPng}
          className="cart-btn"
          onClick={addCartHandler}
          alt="favorite"
        />
      </div>

      <div className="book-content">
        <h3>{value.class}</h3>
        <p className="price">₹{value.price}</p>
        <p className="desc">{value.desc}</p>

        <div className="btn-group">
          <button className="contact-btn" onClick={contactHandler}>
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
