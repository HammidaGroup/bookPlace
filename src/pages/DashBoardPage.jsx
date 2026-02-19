import "./DashBoardPage.css"
import HeaderHome from '../components/HeaderComp/HeaderHome'
import Menu from '../components/Menu'
import DashCard from "../components/CardComponents/DashCard"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"

const DashBoardPage = () => {
   const  formData = new FormData()
    const [books, setBooks] = useState([]);
      const [filteredBooks, setFilteredBooks] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
     
    
      useEffect(() => {
         formData.append("token",localStorage.getItem("token"))
        const fetchBooks = async () => {
          try {
            setIsLoading(true);
    
            const response = await fetch("https://bookPlace-backend.onrender.com/api/data/dashboard",{
                method:"POST",
                body:formData
            });
    
            if (!response.ok) {
              throw new Error("Failed to fetch books");
            }
    
            const data = await response.json();
    data.data.reverse()// Show latest books first
    // console.log(data);
    
            // Only active books
            const activeBooks = data.data.filter(
              (item) => item.status === "active"
            );
    
            setBooks(activeBooks);
            setFilteredBooks(activeBooks);
          } catch (error) {
            console.error("Fetch error:", error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchBooks();
      }, []);
      
      
    // delete plot card UI from dashboard after delete plot from database
      const deleteUI = async(id)=>{
  setFilteredBooks(pre=>pre.filter(book=>book._id !== id))

    }
  return (
    <>
    <HeaderHome/>
    <div className="dashBoard-main">
        <Menu/>
        <h1>Dashboard</h1>
       
         
        <div className="dashCard-container">
              {isLoading ? <Loading/> : filteredBooks.length > 0 ? (
                filteredBooks.map((item) => (
                  <DashCard key={item._id} value={item} onDelete={deleteUI} />
                ))
              ) : (
                <p>No books available</p>
              )}
        </div>
        
    </div>
    </>
  )
}

export default DashBoardPage