import React from 'react'

const CartOrdBtn = ({value , total}) => {
 
  
  const ordBtnHandler = ()=>{
    
    const message = `Hello Sir/Madam,

I am interested in buying this second-hand book.
 ${value.map(element => {
  
  return `
  ${element.bookClass} ${element.subject}
  Description: ${element.bookDesc}
 💰 Price: ₹${element.bookPrice}
  🖼 Image: ${element.bookImg}
  ` 
 })
}
Total : ₹${ total}

Kindly share more details regarding the book condition.
Looking forward to your response.
`;
console.log(message);


    const url = `https://wa.me/917571950460?text=${encodeURIComponent(message)}`;
    window.location.href = url;

  }
  return (
    <button onClick={ordBtnHandler}>Order Now</button>
  )
}

export default CartOrdBtn