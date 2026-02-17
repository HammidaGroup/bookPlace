import React, {  useState } from 'react'
import "./Catogary.css"
import { useNavigate } from 'react-router-dom'
const Catogary = () => {
  const navigate = useNavigate()
  const [catogaryText, setCatogaryText] = useState("")
  const catogaryHandler = (e)=>{
  if (e.target.innerText === "Class 9") {
   navigate("/class9thBook")
   
  }else if(e.target.innerText === "Class 10"){
    navigate("/class10thBook")
    
  }else if(e.target.innerText === "Class 11"){
    navigate("/class11thBook")
    
  }else if(e.target.innerText === "Class 12"){
    navigate("/class12thBook")

  }
  }
  return (
    <>
    <div className="catogary-main-div" onClick={e=> catogaryHandler(e)
    }>
        <div className="classDiv">Class 9</div>
        <div className="classDiv">Class 10</div>
        <div className="classDiv">Class 11</div>
        <div className="classDiv">Class 12</div>
 
    </div>
    </>
  )
}

export default Catogary