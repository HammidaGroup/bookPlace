import React from 'react'
import "./Loading.css";
import LoadingGif from "../assets/gif/addingPlot.gif"
const Loading = () => {
  return (
    <>
    <div className='loading-box' >
         <img src={LoadingGif} alt="Loading" className="loading-gif" />
    <h1>Loading...</h1>
    </div>
    </>
  )
}

export default Loading