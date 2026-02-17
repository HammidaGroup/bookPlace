import React, { useContext } from 'react'
import { searchValContext } from '../context/searchValContext'
import searchIcon from "../assets/searchIcon.png"
import "./SearchInp.css"
const SearchInp = () => {
     const searchContextState = useContext(searchValContext)
     
  return (
    <div className="searchBox">
   <img src={searchIcon} alt="search icon" />
            <input onChange={e=>searchContextState.setSearchVal(e.target.value)} value={searchContextState.searchVal} type="text"  placeholder='book, class or subject...' />
            
           </div> 
  )
}

export default SearchInp