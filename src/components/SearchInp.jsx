import React, { useContext } from 'react'
import { searchValContext } from '../context/searchValContext'
import searchIcon from "../assets/searchIcon.png"
import "./SearchInp.css"
const SearchInp = () => {
     const searchContextState = useContext(searchValContext)
     
  return (
    <div className="searchBox">

            <input onChange={e=>searchContextState.setSearchVal(e.target.value)} value={searchContextState.searchVal} type="text"  placeholder='Search, class or subject...' />
            
           </div> 
  )
}

export default SearchInp