import React from 'react'
import "./BookAL.css"
import lodingGif from "../assets/gif/loading.gif"
const BookAL = () => {
  return (
   <>
   <div className="bookAL-mainDiv">
 <img src={lodingGif} alt="Loading..." />
 <h1>Book Adding...</h1>
 <h3>Please Waite</h3>
   </div>
   </>
  )
}

export default BookAL