import React, { useEffect, useState } from 'react'
import "./MenuProfile.css"
import LogoutBtn from './LogoutBtn'
import cutPng from "../../assets/cut.png"
import morePng from "../../assets/more.png"
const MenuProfile = () => {
const formData = new FormData()
const [token, setToken] = useState(localStorage.getItem("token"))
const [profileData, setProfileData] = useState([])

const [info, setInfo] = useState()
 
formData.append("token",token)
 
useEffect(()=>{
   const getProfileData= async ()=>{
     const response  = await fetch("https://bookplace-backend.onrender.com/api/data/menuProfile",{
        method:"POST",
        body:formData
    })
    const data = await response.json()
    console.log(data.menuProfileData[0].image);
    setProfileData(data.menuProfileData[0])
    
   }
   getProfileData()
},[])

const onCut =()=>{
  setInfo(<></>)
}
const profileClickHandler = ()=>{
setInfo(<>
  { <div className="menuProfileInfo-div">
        <img onClick={onCut} className='cutBtn' src={cutPng} alt="" />
           <h3>{profileData.email}</h3>
           <LogoutBtn/>
        </div>}
</>)
}
  return (
    <>
    <div className="menuProfile-div">
     {info}
        <div className="left">
            <img className='profileImg' src={profileData.image} alt="profile Image" />
        </div>
        <div className="right">
            <h3>{profileData.displayName}</h3>
            <img onClick={profileClickHandler} className='moreBtn' src={morePng} alt="morebtn" />
        </div>
    </div>
    </>
  )
}

export default MenuProfile