import React from 'react'
import "./SomethingWrong.css"
import wrongGif from "../assets/gif/wrong.gif"
const SomthingWrong = () => {
  return (
   <>
   <div className="somthingWrong-mainDiv">
 <img src={wrongGif} alt="wrong" />
 <h1>Something Went Wrong</h1>
    <h3>Please Try Again Later...</h3>
   </div>
   </>
  )
}

export default SomthingWrong