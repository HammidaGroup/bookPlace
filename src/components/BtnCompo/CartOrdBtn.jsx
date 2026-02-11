import React from 'react'

const CartOrdBtn = ({value , total}) => {
  
  const ordBtnHandler = ()=>{
    console.log(value);
    const message = `Hello Sir/Madam,

I am interested in buying this second-hand book.
 ${value.map(element => {
  
  return `
  ${element.class}
 💰 Price: ₹${element.price}
  🖼 Image: ${element.img}
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