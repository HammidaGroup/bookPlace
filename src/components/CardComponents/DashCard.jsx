import React, { useEffect } from 'react'
import "./DashCard.css" 
import { Form } from 'react-router-dom'
const DashCard = ({value , onDelete}) => {
const formData = new FormData();
    
    const deleteHandler =async ()=>{
        const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;
        formData.append("bookId",value._id)
    //    console.log(value._id);
   const  response = await fetch("https://bookplace-backend.onrender.com/api/data/deleteBook",{
        method:"POST",
        body:formData
    })
    if(response.ok){
       onDelete(value._id)
    }
       
    }
  return (
    <>
    <div className="dashCard-main">
       <div className="book-img">
               <img className="bookImg" src={value.bookImg} alt="book" />
               
             </div>
       
             <div className="book-content">
               <h3>{value.bookClass}th</h3>
               <p className="price">₹{value.bookPrice}</p>
               <p className="desc">{value.bookDesc}</p>
       
               <div className="btn-group">
                 <button className="delete-btn" onClick={deleteHandler}>
                   Delete
                 </button>
               </div>
             </div>
    </div>
    </>
  )
}

export default DashCard