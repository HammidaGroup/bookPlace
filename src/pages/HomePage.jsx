import React, { useContext, useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../components/Header";
import BookCard from "../components/CardComponents/Card";
import { searchValContext } from "../context/searchValContext";
import Menu from "../components/Menu";
import HomePageTopHeroComponent from "../components/HomePageTopHero-Component";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import Catogary from "../components/Catogary";

const HomePage = () => {
  const { searchVal } = useContext(searchValContext);

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 🔥 Fetch Data
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          "http://https://bookplace-backend.onrender.com/api/send/bookData"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await response.json();

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

  // 🔥 Search Filter
  useEffect(() => {
    const filtered = books.filter((item) => {
      const searchString = `
        ${item.bookClass}
        ${item.subject}
        ${item.bookDesc}
        ${item.bookPrice}
      `.toLowerCase();

      return searchString.includes(searchVal.toLowerCase());
    });

    setFilteredBooks(filtered);
  }, [searchVal, books]);

  // 🔥 Chunk Books (2 per row)
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (filteredBooks.length === 0) {
    content = (
      <p className="no-data">
        No books found 📚 <br />
        Try searching by class, subject or price.
      </p>
    );
  } else {
    content = (
      <>
        {chunkArray(filteredBooks, 2).map((group, index) => (
          <div className="card-cont" key={index}>
            {group.map((bookData) => (
              <BookCard key={bookData._id} value={bookData} />
            ))}
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="homeMainDiv">
        <Menu />
        <HomePageTopHeroComponent />
        <Catogary />
        <div className="home-card-div">{content}</div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default HomePage;
