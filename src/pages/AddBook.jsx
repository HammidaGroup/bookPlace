import React, { useEffect, useState } from 'react'
import "./AddBook.css"
import Header from '../components/Header'
import Menu from '../components/Menu'
import inpImgIcon from "../assets/inpImgIcon.jpg"
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
  const navigate = useNavigate()
  const formData = new FormData()
  const [bookImg, setBookImg] = useState(undefined)
  const [bookClass, setBookClass] = useState(null)
  const [subject, setSubject] = useState("")
  const [bookPrice, setBookPrice] = useState()
  const [phoneNo, setPhoneNo] = useState()
  const [bookDesc, setBookDesc] = useState("")
const [imgPreview, setImgPreview] = useState(null)
    useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/join");
    return;
  }

  fetch("http://localhost:3000/api/auth/verify", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      if (!res.ok) throw new Error("Unauthorized");
    })
    .catch(() => {
      localStorage.removeItem("token");
      navigate("/join");
    });
}, []);
// localStorage.clear()
  const addBookBtnHandler = async () =>{
   formData.append("bookImg",bookImg)
   formData.append("bookClass",bookClass)
   formData.append("subject",subject)
   formData.append("bookPrice",bookPrice)
   formData.append("phoneNo",phoneNo)
   formData.append("bookDesc",bookDesc)
   formData.append("token",localStorage.getItem("token"))

const response = await fetch("http://localhost:3000/api/book/add",{

  method:"POST",
  body:formData

})
      
const mess = await response.json()
}
  const imgChangeHandler = (e)=>{
    setBookImg(e.target.files[0])
    setImgPreview(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <>
    <Header/>
    <div className="addBook-mainPage">
        <Menu/>
       <div className="formDiv">
         <div className="imgDiv">
              <label className="img-label">
    <img
      src={imgPreview ? imgPreview : inpImgIcon}
      alt="preview"
      className="preview-img"
    />

    <input
      type="file"
      accept="image/*"
      onChange={imgChangeHandler}
      hidden
    />
  </label>
           
        </div>
        
       
       <div className="cla-sub-Div">
        
        <select onChange={e=>setBookClass(e.target.value)} id="class">
         <option value="Class">Class</option>
         <option value="9">9</option>
         <option value="10">10</option>
         <option value="11">11</option>
         <option value="12">12</option>
        </select>
       
       <select id='sub' onChange={e=>setSubject(e.target.value)
       }>
        <option value="Subject">Subject</option>
        <option value="English">English</option>
        <option value="Math">Math</option>
        <option value="Hindi">Hindi</option>
        <option value="Social Science">Social Science</option>
        <option value="Science">Science</option>
        <option value="Physics">Physics</option>
        <option value="Biology">Biology</option>
        <option value="Chemistry">Chemistry</option>
       </select>
       </div>
       
       <div className="inpDiv">
         <label htmlFor="number">Price</label>
        <input onChange={e=>setBookPrice(e.target.value)} value={bookPrice} type="number" placeholder='Enter Price '/>
       </div>
       <div className="inpDiv">
         <label htmlFor="number">Phone No</label>
        <input onChange={e=>setPhoneNo(e.target.value)} value={phoneNo} type="number" placeholder='Enter Correct Phone Number '/>
       </div>
       <div className="inpDiv">
         <label htmlFor="number">Description</label>
        <textarea onChange={e=>setBookDesc(e.target.value)} value={bookDesc} placeholder='Enter the discription'></textarea>
       </div>
         <button onClick={addBookBtnHandler}>Add Book</button>
       </div>
    </div>
    </>
  )
}

export default AddBook