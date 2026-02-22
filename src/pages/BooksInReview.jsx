import React, { useEffect, useState } from 'react'
import "./BooksInReview.css"
import Loading from '../components/Loading'
import Header from '../components/HeaderComp/Header'
import Menu from '../components/Menu'
const BooksInReview = () => {
    const formData = new FormData()
const [booksInReview, setBooksInReview] = useState([])
const [isLoading, setIsLoading] = useState(true)
        useEffect(() => {
            const token = localStorage.getItem("token");
          
            if (!token) {
              navigate("/join");
              return;
            }
          
            fetch("https://bookplace-backend.onrender.com/api/auth/verify", {
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

          useEffect(() => {
         formData.append("token",localStorage.getItem("token"))
        const fetchBooks = async () => {
          try {
            setIsLoading(true);
    
            const response = await fetch("https://bookplace-backend.onrender.com/api/data/dashboard",{
                method:"POST",
                body:formData
            });
    
            if (!response.ok) {
              throw new Error("Failed to fetch books");
            }
    
            const data = await response.json();
    data.data.reverse()// Show latest books first
    // console.log(data);
    
              
          

            
// Only books in review
            const booksInReview = data.data.filter(
              (item) => item.status === "in review"
            );
            setBooksInReview(booksInReview);
          } catch (error) {
            console.error("Fetch error:", error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchBooks();
      }, []);
          
  return (
    <>
    <Header/>
    <div className="booksInReview-main">
      <Menu/>
       {isLoading && <Loading/>}
       {isLoading === true && booksInReview.length === 0 && <p className='noBooks'>No books in review</p> }
       {isLoading === false && booksInReview.length > 0 && 

       <div className="reviewBox">
        <h1>Book In Review</h1>
        <p>📚 आपकी किताब Review में है<br />

हम आपकी दी गई जानकारी चेक कर रहे हैं।
आम तौर पर 2–6 घंटे लगते हैं।<br />

Approve होते ही आपकी किताब वेबसाइट पर दिखाई देगी। <br /></p>
       </div>
       
       }
            
       {booksInReview.map((item)=>{
        return <div className="reviewCard" key={item._id}>
            <div className="left">
                <img src={item.bookImg} alt={item.subject} />
            </div>
            <div className="right">
                <p className='class'> <strong>Class :</strong> {item.bookClass}th</p>
            <p className='price'> <strong>Price:</strong> ₹{item.bookPrice}</p>
             <p className='status'><strong>Status:</strong> {item.status}</p>
         
            </div>
        </div>
       })}
    </div>
    </>
  )
}

export default BooksInReview