import React, { useContext } from 'react'

import "./HomePageTopHero-Component.css";
import searchIcon from "../assets/searchIcon.png"

import { searchValContext } from '../context/searchValContext';

const HomePageTopHeroComponent = () => {
      const searchContext = useContext(searchValContext)
    
  return (
      <>
      <div className="top-hero-div">
        
      <div className="top-hero-content">
          <h1 >Buy & Sell <strong>Second-Hand </strong> Books Near You</h1>
        <p>UP Board ke school books saste daam par kharidein aur bechein — Class 6 se 12 tak, sab ek jagah.</p>
        <div className="searchBox">
<img src={searchIcon} alt="search icon" />
         <input onChange={e=>searchContext.setSearchVal(e.target.value)} value={searchContext.searchVal} type="text"  placeholder='book, class or subject...' />
         
        </div> 
        
      </div>
      </div>
      
      </>
  )
}

export default HomePageTopHeroComponent