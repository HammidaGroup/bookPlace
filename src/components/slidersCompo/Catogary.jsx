import React, {  useState } from 'react'
import "./Catogary.css"
import { useNavigate } from 'react-router-dom'
const Catogary = () => {
  const navigate = useNavigate()
  const [catogaryText, setCatogaryText] = useState("")
  const catogaryHandler = (e)=>{
  if (e.target.innerText === "Class 9") {
    localStorage.setItem("classAcCo", "9");
    navigate("/class9thBook")
    
  }else if(e.target.innerText === "Class 10"){
    localStorage.setItem("classAcCo", "10");
    navigate("/class10thBook")
    
  }else if(e.target.innerText === "Class 11"){
    localStorage.setItem("classAcCo", "11");
    navigate("/class11thBook")
    
  }else if(e.target.innerText === "Class 12"){
    localStorage.setItem("classAcCo", "12");
    navigate("/class12thBook")

  }
  }
  if (localStorage.getItem("classAcCo") == "9"){
    var color9 = "red"
  }
  if (localStorage.getItem("classAcCo") == "10"){
    var color10 = "red"
  }
  if (localStorage.getItem("classAcCo") == "11"){
    var color11 = "red"
  }
  if (localStorage.getItem("classAcCo") == "12"){
    var color12 = "red"
  }
  return (
    <>
    <div className="catogary-main-div" onClick={e=> catogaryHandler(e)
    }>
        <div className="classDiv" style={{color:color9}} >Class 9</div>
        <div className="classDiv" style={{color:color10}} >Class 10</div>
        <div className="classDiv" style={{color:color11}} >Class 11</div>
        <div className="classDiv" style={{color:color12}} >Class 12</div>
 
    </div>
    </>
  )
}

export default Catogary