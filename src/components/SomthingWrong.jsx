import React from 'react'
import "./SomethingWrong.css"

const SomthingWrong = () => {
  const tryAgainHandler = () => {
    window.location.reload()
  }
  return (
   <>
   <div className="somthingWrong-mainDiv">

 <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/tv-off.png" alt="tv-off"/>
 <h1>Something Went Wrong</h1>
    <h3>Please Try Again Later...</h3>
    <button onClick={tryAgainHandler}>Try Again</button>
   </div>
   </>
  )
}

export default SomthingWrong