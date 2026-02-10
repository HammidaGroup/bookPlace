import React, { useState } from "react";
import "./Card.css";
import addCartPng from "../../assets/add-to-cart.png";

import { useNavigate } from "react-router-dom";

const BookCard = ({ value }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  

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
  };

  return (
    <div className="book-card">
      <div className="book-img">
        <img className="bookImg" src={value.img} alt="book" />
        <img
          src={addCartPng}
          className="cart-btn"
          
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
