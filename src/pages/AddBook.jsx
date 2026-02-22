import React, { useEffect, useState } from 'react'
import "./AddBook.css"
import Header from '../components/HeaderComp/Header'
import Menu from '../components/Menu'
import inpImgIcon from "../assets/gif/imgInp.gif"
import { useNavigate } from 'react-router-dom'
import BookAL from '../components/BookAL'
import BookAS from '../components/BookAS'
import SomthingWrong from '../components/SomthingWrong'
import imageCompression from "browser-image-compression"

const AddBook = () => {

  const navigate = useNavigate()

  const [bookImg, setBookImg] = useState(null)
  const [bookClass, setBookClass] = useState("")
  const [subject, setSubject] = useState("")
  const [bookPrice, setBookPrice] = useState("")
  const [phoneNo, setPhoneNo] = useState("")
  const [bookDesc, setBookDesc] = useState("")
  const [imgPreview, setImgPreview] = useState(null)

  const [isAdding, setIsAdding] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const [isWrong, setIsWrong] = useState(false)

  // 🔐 Token Verify
  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) {
      navigate("/join")
      return
    }

    fetch("https://bookplace-backend.onrender.com/api/auth/verify", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized")
      })
      .catch(() => {
        localStorage.removeItem("token")
        navigate("/join")
      })
  }, [])

  // 📸 Image Compress + Preview
  const imgChangeHandler = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const options = {
      maxSizeMB: 0.4,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    }

    try {
      const compressedFile = await imageCompression(file, options)
      setBookImg(compressedFile)
      setImgPreview(URL.createObjectURL(compressedFile))
    } catch (err) {
      console.log("Image compression error:", err)
    }
  }

  // 📤 Add Book
  const addBookBtnHandler = async () => {

    if (!bookImg || !bookClass || !subject || !bookPrice || !phoneNo) {
      alert("Please fill all required fields")
      return
    }

    setIsAdding(true)
    setIsWrong(false)

    try {

      const formData = new FormData()

      formData.append("bookImg", bookImg)
      formData.append("bookClass", bookClass)
      formData.append("subject", subject)
      formData.append("bookPrice", bookPrice)
      formData.append("phoneNo", phoneNo)
      formData.append("bookDesc", bookDesc)
      formData.append("token", localStorage.getItem("token"))

      const response = await fetch(
        "https://bookplace-backend.onrender.com/api/book/add",
        {
          method: "POST",
          body: formData
        }
      )

      const mess = await response.json()

      if (mess.mess === "Book added successfully") {
        setIsDone(true)
        
      } else {
        setIsWrong(true)
      }

    } catch (error) {
      console.log(error)
      setIsWrong(true)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <>
      <Header />

      <div className="addBook-mainPage">

        {isAdding && <BookAL />}
        {isDone && <BookAS />}
     
        {isWrong && <SomthingWrong />}

        <Menu />

        <div className="formDiv">

          <div className="imgDiv">

            <label className="img-label">
            {!imgPreview && <h1 className='upImg-h2'>Upload Image</h1>}
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

          <div  className="cla-div">
            <select id='cla'  onChange={e => setBookClass(e.target.value)}>
              <option value="">Class</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </select>
          </div>

          <div className="sub-div">
            

            <select id='sub' onChange={e => setSubject(e.target.value)}>
              <option value="">Select Subject</option>
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
            <label>Price</label>
            <input
              type="number"
              value={bookPrice}
              onChange={e => setBookPrice(e.target.value)}
              placeholder='Enter Price'
            />
          </div>

          <div className="inpDiv">
            <label>Phone No</label>
            <input
              type="number"
              value={phoneNo}
              onChange={e => setPhoneNo(e.target.value)}
              placeholder='Enter Phone Number'
            />
          </div>

          <div className="inpDiv">
            <label>Description</label>
            <textarea
              value={bookDesc}
              onChange={e => setBookDesc(e.target.value)}
              placeholder='Enter description'
            ></textarea>
          </div>

          <button
            onClick={addBookBtnHandler}
            disabled={isAdding}
          >
            {isAdding ? "Uploading..." : "Add Book"}
          </button>

        </div>
      </div>
    </>
  )
}

export default AddBook