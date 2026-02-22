import React from 'react'
import "./BookAS.css"

const BookAS = () => {
  return (
   <>
   <div className="bookAS-mainDiv">
 <img src="https://i.gifer.com/7efs.gif" alt="done" />
 <h1>Your Book In Review</h1>
    <button className='continueAdd' onClick={()=>window.location.href="AddBook"}>Continue Add</button>
    <button className='continueAdd' onClick={()=>window.location.href="/inReview"}>See Review</button>
   </div>
   </>
  )
}

export default BookAS