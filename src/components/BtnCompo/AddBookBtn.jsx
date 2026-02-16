import React from 'react'
import "./AddBookBtn.css"
import { useNavigate } from 'react-router-dom'
const AddBookBtn = () => {
    const navigat = useNavigate()
  return (
    <button className='addBookBtn' onClick={()=>navigat("/AddBook")}>Add Book</button>
  )
}

export default AddBookBtn