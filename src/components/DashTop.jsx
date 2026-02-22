import React, { useEffect, useState } from 'react'
import "./DashTop.css"
import { useNavigate } from 'react-router-dom';
const DashTop = ({totalActive , booksInReview}) => {
  const navigat = useNavigate()
    const [totalLogin, setTotalLogin] =useState(0);
    
    const inReviewHandler =()=>{
        navigat("/inReview")
    }
  return (

        <>
        <div className="dashTop-main">
          <div onClick={inReviewHandler} className="contentGroup">
            <h3>In Review</h3>
            <p>{booksInReview}</p>
          </div>
          <div className="contentGroup">
            <h3>Total Active</h3>
            <p>{totalActive}</p>
          </div>
       
        </div>
        </>
  )
}

export default DashTop