import React, { useContext, useEffect, useState } from 'react';
import "./ClassPage.css";

import BookCard from '../components/CardComponents/Card';
import Loading from '../components/Loading';
import Catogary from '../components/slidersCompo/Catogary';
import { searchValContext } from '../context/searchValContext';
import Header from '../components/HeaderComp/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Class9thPage = () => {

 useEffect(() => {
  document.title = "Class 9 Books | BookPlace Azamgarh";

  const meta = document.querySelector("meta[name='description']");
  if (meta) {
    meta.setAttribute(
      "content",
      "Buy and sell second-hand Class 9 UP Board books in Azamgarh at affordable prices."
    );
  }
}, []);

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 const searchVal = useContext(searchValContext)
 const [filteredBooks, setFilteredBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://bookplace-backend.onrender.com/api/send/bookData');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        data.reverse()// Show latest books first
        // Filter for class 9 books
        // console.log(data.data);
        
        const class9Books = data.filter(book => book.bookClass === "9");

        setBooks(class9Books);
      } catch (err) {
        setError('Something went wrong while fetching books.');
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

//   console.log(searchVal);
  
  // 🔥 Search Filter
    useEffect(() => {
      const filtered = books.filter((item) => {
        const searchString = `
          ${item.bookClass}
          ${item.subject}
          ${item.bookDesc}
          ${item.bookPrice}
        `.toLowerCase();
  
        return searchString.includes(searchVal.searchVal.toLowerCase());
      });
  
      setFilteredBooks(filtered);
    }, [searchVal, books]);
  

  // Chunk Books (2 per row)
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };


  

  return (
    <>
    
      <Header/>
      <div className="class-page-container">
        <Menu/>
       
        <Catogary/>
        {loading && <Loading/>}
         {chunkArray(filteredBooks, 2).map((group, idx) => (
          <div className="card-cont" key={idx}>
            {group.map((book) => (
              <BookCard key={book._id || book.bookDesc} value={book} />
            ))}
          </div>
        ))}
        <Footer/>
      </div>
    </>
  );
};

export default Class9thPage;
